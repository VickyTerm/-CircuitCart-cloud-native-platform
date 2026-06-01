-- CreateEnum
CREATE TYPE "ApiKeyStatus" AS ENUM ('ACTIVE', 'REVOKED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "LogStatus" AS ENUM ('SUCCESS', 'CLIENT_ERROR', 'SERVER_ERROR', 'TIMEOUT');

-- CreateEnum
CREATE TYPE "RateLimitScope" AS ENUM ('IP', 'USER', 'API_KEY');

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "key_hash" VARCHAR(128) NOT NULL,
    "key_prefix" VARCHAR(8) NOT NULL,
    "status" "ApiKeyStatus" NOT NULL DEFAULT 'ACTIVE',
    "owner_id" UUID,
    "scopes" TEXT[],
    "expires_at" TIMESTAMP(3),
    "last_used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestLog" (
    "id" UUID NOT NULL,
    "api_key_id" UUID,
    "user_id" UUID,
    "ip" VARCHAR(45) NOT NULL,
    "method" VARCHAR(10) NOT NULL,
    "path" TEXT NOT NULL,
    "upstream_service" TEXT,
    "status_code" INTEGER NOT NULL,
    "log_status" "LogStatus" NOT NULL,
    "request_ms" INTEGER NOT NULL,
    "request_size" INTEGER,
    "response_size" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequestLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RouteConfig" (
    "id" UUID NOT NULL,
    "path_prefix" TEXT NOT NULL,
    "upstream_url" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "strip_prefix" BOOLEAN NOT NULL DEFAULT false,
    "timeout_ms" INTEGER NOT NULL DEFAULT 5000,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RouteConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockedIp" (
    "id" UUID NOT NULL,
    "ip" VARCHAR(45) NOT NULL,
    "reason" TEXT,
    "blocked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3),
    "blocked_by" UUID,

    CONSTRAINT "BlockedIp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RateLimitOverride" (
    "id" UUID NOT NULL,
    "scope" "RateLimitScope" NOT NULL,
    "api_key_id" UUID,
    "user_id" UUID,
    "ip" VARCHAR(45),
    "limit" INTEGER NOT NULL,
    "window_sec" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RateLimitOverride_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_hash_key" ON "ApiKey"("key_hash");

-- CreateIndex
CREATE INDEX "ApiKey_owner_id_idx" ON "ApiKey"("owner_id");

-- CreateIndex
CREATE INDEX "ApiKey_status_idx" ON "ApiKey"("status");

-- CreateIndex
CREATE INDEX "RequestLog_api_key_id_idx" ON "RequestLog"("api_key_id");

-- CreateIndex
CREATE INDEX "RequestLog_user_id_idx" ON "RequestLog"("user_id");

-- CreateIndex
CREATE INDEX "RequestLog_log_status_idx" ON "RequestLog"("log_status");

-- CreateIndex
CREATE INDEX "RequestLog_created_at_idx" ON "RequestLog"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "RouteConfig_path_prefix_key" ON "RouteConfig"("path_prefix");

-- CreateIndex
CREATE INDEX "RouteConfig_is_active_idx" ON "RouteConfig"("is_active");

-- CreateIndex
CREATE UNIQUE INDEX "BlockedIp_ip_key" ON "BlockedIp"("ip");

-- CreateIndex
CREATE INDEX "BlockedIp_expires_at_idx" ON "BlockedIp"("expires_at");

-- CreateIndex
CREATE INDEX "RateLimitOverride_api_key_id_idx" ON "RateLimitOverride"("api_key_id");

-- CreateIndex
CREATE INDEX "RateLimitOverride_user_id_idx" ON "RateLimitOverride"("user_id");

-- AddForeignKey
ALTER TABLE "RequestLog" ADD CONSTRAINT "RequestLog_api_key_id_fkey" FOREIGN KEY ("api_key_id") REFERENCES "ApiKey"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RateLimitOverride" ADD CONSTRAINT "RateLimitOverride_api_key_id_fkey" FOREIGN KEY ("api_key_id") REFERENCES "ApiKey"("id") ON DELETE CASCADE ON UPDATE CASCADE;
