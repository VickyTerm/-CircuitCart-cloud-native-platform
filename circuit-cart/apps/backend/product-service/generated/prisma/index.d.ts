
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * Product category — supports infinite nesting via parent_id self-reference.
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * IoT product. `iotSpecs` holds a flexible JSON object (voltage, protocol,
 * interface, etc.) — schema varies per product type, so Json is the right choice.
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Inventory
 * One inventory record per product. `available` = physical stock minus reserved.
 * `reserved` is incremented when a cart checkout begins, released if payment fails.
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryLog
 * Append-only audit log for every stock change.
 * `actorId` is the UUID string from user-service (no FK — cross-service).
 */
export type InventoryLog = $Result.DefaultSelection<Prisma.$InventoryLogPayload>
/**
 * Model Review
 * Customer review for a product.
 * `userId` and `userFullName` are snapshots from user-service — no live FK.
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ReviewHelpfulVote
 * Prevents a user from voting a review helpful more than once.
 * Compound unique on (reviewId + userId) enforced by @@unique.
 */
export type ReviewHelpfulVote = $Result.DefaultSelection<Prisma.$ReviewHelpfulVotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InventoryLogType: {
  restock: 'restock',
  correction: 'correction',
  reserve: 'reserve',
  release: 'release'
};

export type InventoryLogType = (typeof InventoryLogType)[keyof typeof InventoryLogType]


export const ReviewStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]

}

export type InventoryLogType = $Enums.InventoryLogType

export const InventoryLogType: typeof $Enums.InventoryLogType

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryLog`: Exposes CRUD operations for the **InventoryLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryLogs
    * const inventoryLogs = await prisma.inventoryLog.findMany()
    * ```
    */
  get inventoryLog(): Prisma.InventoryLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewHelpfulVote`: Exposes CRUD operations for the **ReviewHelpfulVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewHelpfulVotes
    * const reviewHelpfulVotes = await prisma.reviewHelpfulVote.findMany()
    * ```
    */
  get reviewHelpfulVote(): Prisma.ReviewHelpfulVoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Product: 'Product',
    Inventory: 'Inventory',
    InventoryLog: 'InventoryLog',
    Review: 'Review',
    ReviewHelpfulVote: 'ReviewHelpfulVote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "product" | "inventory" | "inventoryLog" | "review" | "reviewHelpfulVote"
      txIsolationLevel: never
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InventoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InventoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryLog: {
        payload: Prisma.$InventoryLogPayload<ExtArgs>
        fields: Prisma.InventoryLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          findFirst: {
            args: Prisma.InventoryLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          findMany: {
            args: Prisma.InventoryLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>[]
          }
          create: {
            args: Prisma.InventoryLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          createMany: {
            args: Prisma.InventoryLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          update: {
            args: Prisma.InventoryLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          deleteMany: {
            args: Prisma.InventoryLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          aggregate: {
            args: Prisma.InventoryLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryLog>
          }
          groupBy: {
            args: Prisma.InventoryLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InventoryLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InventoryLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InventoryLogCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryLogCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ReviewHelpfulVote: {
        payload: Prisma.$ReviewHelpfulVotePayload<ExtArgs>
        fields: Prisma.ReviewHelpfulVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewHelpfulVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewHelpfulVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload>
          }
          findFirst: {
            args: Prisma.ReviewHelpfulVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewHelpfulVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload>
          }
          findMany: {
            args: Prisma.ReviewHelpfulVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload>[]
          }
          create: {
            args: Prisma.ReviewHelpfulVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload>
          }
          createMany: {
            args: Prisma.ReviewHelpfulVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewHelpfulVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload>
          }
          update: {
            args: Prisma.ReviewHelpfulVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload>
          }
          deleteMany: {
            args: Prisma.ReviewHelpfulVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewHelpfulVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewHelpfulVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewHelpfulVotePayload>
          }
          aggregate: {
            args: Prisma.ReviewHelpfulVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewHelpfulVote>
          }
          groupBy: {
            args: Prisma.ReviewHelpfulVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewHelpfulVoteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReviewHelpfulVoteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReviewHelpfulVoteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReviewHelpfulVoteCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewHelpfulVoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    product?: ProductOmit
    inventory?: InventoryOmit
    inventoryLog?: InventoryLogOmit
    review?: ReviewOmit
    reviewHelpfulVote?: ReviewHelpfulVoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    inventoryLogs: number
    reviews: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryLogs?: boolean | ProductCountOutputTypeCountInventoryLogsArgs
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLogWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    helpfulVotes: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpfulVotes?: boolean | ReviewCountOutputTypeCountHelpfulVotesArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountHelpfulVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewHelpfulVoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    parentId: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    parentId: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    imageUrl: number
    parentId: number
    sortOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    parentId?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    parentId?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    parentId?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    imageUrl: string | null
    parentId: string | null
    sortOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    parentId?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    parentId?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "imageUrl" | "parentId" | "sortOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      children: Prisma.$CategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      imageUrl: string | null
      parentId: string | null
      sortOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly imageUrl: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
    readonly isActive: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    discountedPrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    discountedPrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    sku: string | null
    brand: string | null
    price: number | null
    discountedPrice: number | null
    categoryId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    sku: string | null
    brand: string | null
    price: number | null
    discountedPrice: number | null
    categoryId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    sku: number
    brand: number
    price: number
    discountedPrice: number
    categoryId: number
    iotSpecs: number
    images: number
    tags: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    discountedPrice?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    discountedPrice?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sku?: true
    brand?: true
    price?: true
    discountedPrice?: true
    categoryId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sku?: true
    brand?: true
    price?: true
    discountedPrice?: true
    categoryId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    sku?: true
    brand?: true
    price?: true
    discountedPrice?: true
    categoryId?: true
    iotSpecs?: true
    images?: true
    tags?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    sku: string
    brand: string | null
    price: number
    discountedPrice: number | null
    categoryId: string
    iotSpecs: JsonValue | null
    images: JsonValue[]
    tags: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sku?: boolean
    brand?: boolean
    price?: boolean
    discountedPrice?: boolean
    categoryId?: boolean
    iotSpecs?: boolean
    images?: boolean
    tags?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    inventory?: boolean | Product$inventoryArgs<ExtArgs>
    inventoryLogs?: boolean | Product$inventoryLogsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    sku?: boolean
    brand?: boolean
    price?: boolean
    discountedPrice?: boolean
    categoryId?: boolean
    iotSpecs?: boolean
    images?: boolean
    tags?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "sku" | "brand" | "price" | "discountedPrice" | "categoryId" | "iotSpecs" | "images" | "tags" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    inventory?: boolean | Product$inventoryArgs<ExtArgs>
    inventoryLogs?: boolean | Product$inventoryLogsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      inventory: Prisma.$InventoryPayload<ExtArgs> | null
      inventoryLogs: Prisma.$InventoryLogPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      sku: string
      brand: string | null
      /**
       * Price in INR stored as Float. Convert to paise (x100) at the API layer if
       * sub-rupee precision is needed.
       */
      price: number
      discountedPrice: number | null
      categoryId: string
      /**
       * Flexible IoT component specs: { voltage?, current?, protocol?, interface?,
       * operatingTemp?, dimensions?, weight?, pinCount?, ... }
       */
      iotSpecs: Prisma.JsonValue | null
      /**
       * Embedded image array: [{ url, alt, isPrimary }]
       */
      images: Prisma.JsonValue[]
      tags: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventory<T extends Product$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoryArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventoryLogs<T extends Product$inventoryLogsArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoryLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly discountedPrice: FieldRef<"Product", 'Float'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly iotSpecs: FieldRef<"Product", 'Json'>
    readonly images: FieldRef<"Product", 'Json[]'>
    readonly tags: FieldRef<"Product", 'String[]'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product findRaw
   */
  export type ProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Product.inventory
   */
  export type Product$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
  }

  /**
   * Product.inventoryLogs
   */
  export type Product$inventoryLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    where?: InventoryLogWhereInput
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    cursor?: InventoryLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * Product.reviews
   */
  export type Product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    available: number | null
    reserved: number | null
    reorderThreshold: number | null
  }

  export type InventorySumAggregateOutputType = {
    available: number | null
    reserved: number | null
    reorderThreshold: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    available: number | null
    reserved: number | null
    reorderThreshold: number | null
    warehouseLocation: string | null
    lastRestockedAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    available: number | null
    reserved: number | null
    reorderThreshold: number | null
    warehouseLocation: string | null
    lastRestockedAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    productId: number
    available: number
    reserved: number
    reorderThreshold: number
    warehouseLocation: number
    lastRestockedAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    available?: true
    reserved?: true
    reorderThreshold?: true
  }

  export type InventorySumAggregateInputType = {
    available?: true
    reserved?: true
    reorderThreshold?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    productId?: true
    available?: true
    reserved?: true
    reorderThreshold?: true
    warehouseLocation?: true
    lastRestockedAt?: true
    updatedAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    productId?: true
    available?: true
    reserved?: true
    reorderThreshold?: true
    warehouseLocation?: true
    lastRestockedAt?: true
    updatedAt?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    productId?: true
    available?: true
    reserved?: true
    reorderThreshold?: true
    warehouseLocation?: true
    lastRestockedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    productId: string
    available: number
    reserved: number
    reorderThreshold: number
    warehouseLocation: string | null
    lastRestockedAt: Date | null
    updatedAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    available?: boolean
    reserved?: boolean
    reorderThreshold?: boolean
    warehouseLocation?: boolean
    lastRestockedAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>



  export type InventorySelectScalar = {
    id?: boolean
    productId?: boolean
    available?: boolean
    reserved?: boolean
    reorderThreshold?: boolean
    warehouseLocation?: boolean
    lastRestockedAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "available" | "reserved" | "reorderThreshold" | "warehouseLocation" | "lastRestockedAt" | "updatedAt", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      available: number
      reserved: number
      reorderThreshold: number
      warehouseLocation: string | null
      lastRestockedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * @param {InventoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inventory = await prisma.inventory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InventoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Inventory.
     * @param {InventoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inventory = await prisma.inventory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InventoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly productId: FieldRef<"Inventory", 'String'>
    readonly available: FieldRef<"Inventory", 'Int'>
    readonly reserved: FieldRef<"Inventory", 'Int'>
    readonly reorderThreshold: FieldRef<"Inventory", 'Int'>
    readonly warehouseLocation: FieldRef<"Inventory", 'String'>
    readonly lastRestockedAt: FieldRef<"Inventory", 'DateTime'>
    readonly updatedAt: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory findRaw
   */
  export type InventoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Inventory aggregateRaw
   */
  export type InventoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryLog
   */

  export type AggregateInventoryLog = {
    _count: InventoryLogCountAggregateOutputType | null
    _avg: InventoryLogAvgAggregateOutputType | null
    _sum: InventoryLogSumAggregateOutputType | null
    _min: InventoryLogMinAggregateOutputType | null
    _max: InventoryLogMaxAggregateOutputType | null
  }

  export type InventoryLogAvgAggregateOutputType = {
    quantityDelta: number | null
    stockAfter: number | null
  }

  export type InventoryLogSumAggregateOutputType = {
    quantityDelta: number | null
    stockAfter: number | null
  }

  export type InventoryLogMinAggregateOutputType = {
    id: string | null
    productId: string | null
    actorId: string | null
    type: $Enums.InventoryLogType | null
    quantityDelta: number | null
    stockAfter: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type InventoryLogMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    actorId: string | null
    type: $Enums.InventoryLogType | null
    quantityDelta: number | null
    stockAfter: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type InventoryLogCountAggregateOutputType = {
    id: number
    productId: number
    actorId: number
    type: number
    quantityDelta: number
    stockAfter: number
    reason: number
    createdAt: number
    _all: number
  }


  export type InventoryLogAvgAggregateInputType = {
    quantityDelta?: true
    stockAfter?: true
  }

  export type InventoryLogSumAggregateInputType = {
    quantityDelta?: true
    stockAfter?: true
  }

  export type InventoryLogMinAggregateInputType = {
    id?: true
    productId?: true
    actorId?: true
    type?: true
    quantityDelta?: true
    stockAfter?: true
    reason?: true
    createdAt?: true
  }

  export type InventoryLogMaxAggregateInputType = {
    id?: true
    productId?: true
    actorId?: true
    type?: true
    quantityDelta?: true
    stockAfter?: true
    reason?: true
    createdAt?: true
  }

  export type InventoryLogCountAggregateInputType = {
    id?: true
    productId?: true
    actorId?: true
    type?: true
    quantityDelta?: true
    stockAfter?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLog to aggregate.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryLogs
    **/
    _count?: true | InventoryLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryLogMaxAggregateInputType
  }

  export type GetInventoryLogAggregateType<T extends InventoryLogAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryLog[P]>
      : GetScalarType<T[P], AggregateInventoryLog[P]>
  }




  export type InventoryLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLogWhereInput
    orderBy?: InventoryLogOrderByWithAggregationInput | InventoryLogOrderByWithAggregationInput[]
    by: InventoryLogScalarFieldEnum[] | InventoryLogScalarFieldEnum
    having?: InventoryLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryLogCountAggregateInputType | true
    _avg?: InventoryLogAvgAggregateInputType
    _sum?: InventoryLogSumAggregateInputType
    _min?: InventoryLogMinAggregateInputType
    _max?: InventoryLogMaxAggregateInputType
  }

  export type InventoryLogGroupByOutputType = {
    id: string
    productId: string
    actorId: string
    type: $Enums.InventoryLogType
    quantityDelta: number
    stockAfter: number
    reason: string | null
    createdAt: Date
    _count: InventoryLogCountAggregateOutputType | null
    _avg: InventoryLogAvgAggregateOutputType | null
    _sum: InventoryLogSumAggregateOutputType | null
    _min: InventoryLogMinAggregateOutputType | null
    _max: InventoryLogMaxAggregateOutputType | null
  }

  type GetInventoryLogGroupByPayload<T extends InventoryLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryLogGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryLogGroupByOutputType[P]>
        }
      >
    >


  export type InventoryLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    actorId?: boolean
    type?: boolean
    quantityDelta?: boolean
    stockAfter?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryLog"]>



  export type InventoryLogSelectScalar = {
    id?: boolean
    productId?: boolean
    actorId?: boolean
    type?: boolean
    quantityDelta?: boolean
    stockAfter?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type InventoryLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "actorId" | "type" | "quantityDelta" | "stockAfter" | "reason" | "createdAt", ExtArgs["result"]["inventoryLog"]>
  export type InventoryLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryLog"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      /**
       * UUID from user-service — stored as string (no cross-service FK).
       */
      actorId: string
      type: $Enums.InventoryLogType
      /**
       * Positive = stock added; negative = stock removed.
       */
      quantityDelta: number
      /**
       * Absolute stock level after this change.
       */
      stockAfter: number
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["inventoryLog"]>
    composites: {}
  }

  type InventoryLogGetPayload<S extends boolean | null | undefined | InventoryLogDefaultArgs> = $Result.GetResult<Prisma.$InventoryLogPayload, S>

  type InventoryLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryLogCountAggregateInputType | true
    }

  export interface InventoryLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryLog'], meta: { name: 'InventoryLog' } }
    /**
     * Find zero or one InventoryLog that matches the filter.
     * @param {InventoryLogFindUniqueArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryLogFindUniqueArgs>(args: SelectSubset<T, InventoryLogFindUniqueArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryLogFindUniqueOrThrowArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryLogFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindFirstArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryLogFindFirstArgs>(args?: SelectSubset<T, InventoryLogFindFirstArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindFirstOrThrowArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryLogFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryLogs
     * const inventoryLogs = await prisma.inventoryLog.findMany()
     * 
     * // Get first 10 InventoryLogs
     * const inventoryLogs = await prisma.inventoryLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryLogWithIdOnly = await prisma.inventoryLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryLogFindManyArgs>(args?: SelectSubset<T, InventoryLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryLog.
     * @param {InventoryLogCreateArgs} args - Arguments to create a InventoryLog.
     * @example
     * // Create one InventoryLog
     * const InventoryLog = await prisma.inventoryLog.create({
     *   data: {
     *     // ... data to create a InventoryLog
     *   }
     * })
     * 
     */
    create<T extends InventoryLogCreateArgs>(args: SelectSubset<T, InventoryLogCreateArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryLogs.
     * @param {InventoryLogCreateManyArgs} args - Arguments to create many InventoryLogs.
     * @example
     * // Create many InventoryLogs
     * const inventoryLog = await prisma.inventoryLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryLogCreateManyArgs>(args?: SelectSubset<T, InventoryLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryLog.
     * @param {InventoryLogDeleteArgs} args - Arguments to delete one InventoryLog.
     * @example
     * // Delete one InventoryLog
     * const InventoryLog = await prisma.inventoryLog.delete({
     *   where: {
     *     // ... filter to delete one InventoryLog
     *   }
     * })
     * 
     */
    delete<T extends InventoryLogDeleteArgs>(args: SelectSubset<T, InventoryLogDeleteArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryLog.
     * @param {InventoryLogUpdateArgs} args - Arguments to update one InventoryLog.
     * @example
     * // Update one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryLogUpdateArgs>(args: SelectSubset<T, InventoryLogUpdateArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryLogs.
     * @param {InventoryLogDeleteManyArgs} args - Arguments to filter InventoryLogs to delete.
     * @example
     * // Delete a few InventoryLogs
     * const { count } = await prisma.inventoryLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryLogDeleteManyArgs>(args?: SelectSubset<T, InventoryLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryLogs
     * const inventoryLog = await prisma.inventoryLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryLogUpdateManyArgs>(args: SelectSubset<T, InventoryLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryLog.
     * @param {InventoryLogUpsertArgs} args - Arguments to update or create a InventoryLog.
     * @example
     * // Update or create a InventoryLog
     * const inventoryLog = await prisma.inventoryLog.upsert({
     *   create: {
     *     // ... data to create a InventoryLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryLog we want to update
     *   }
     * })
     */
    upsert<T extends InventoryLogUpsertArgs>(args: SelectSubset<T, InventoryLogUpsertArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryLogs that matches the filter.
     * @param {InventoryLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inventoryLog = await prisma.inventoryLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InventoryLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InventoryLog.
     * @param {InventoryLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inventoryLog = await prisma.inventoryLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InventoryLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InventoryLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogCountArgs} args - Arguments to filter InventoryLogs to count.
     * @example
     * // Count the number of InventoryLogs
     * const count = await prisma.inventoryLog.count({
     *   where: {
     *     // ... the filter for the InventoryLogs we want to count
     *   }
     * })
    **/
    count<T extends InventoryLogCountArgs>(
      args?: Subset<T, InventoryLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryLogAggregateArgs>(args: Subset<T, InventoryLogAggregateArgs>): Prisma.PrismaPromise<GetInventoryLogAggregateType<T>>

    /**
     * Group by InventoryLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryLogGroupByArgs['orderBy'] }
        : { orderBy?: InventoryLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryLog model
   */
  readonly fields: InventoryLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryLog model
   */
  interface InventoryLogFieldRefs {
    readonly id: FieldRef<"InventoryLog", 'String'>
    readonly productId: FieldRef<"InventoryLog", 'String'>
    readonly actorId: FieldRef<"InventoryLog", 'String'>
    readonly type: FieldRef<"InventoryLog", 'InventoryLogType'>
    readonly quantityDelta: FieldRef<"InventoryLog", 'Int'>
    readonly stockAfter: FieldRef<"InventoryLog", 'Int'>
    readonly reason: FieldRef<"InventoryLog", 'String'>
    readonly createdAt: FieldRef<"InventoryLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryLog findUnique
   */
  export type InventoryLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog findUniqueOrThrow
   */
  export type InventoryLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog findFirst
   */
  export type InventoryLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLogs.
     */
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog findFirstOrThrow
   */
  export type InventoryLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLogs.
     */
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog findMany
   */
  export type InventoryLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLogs to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog create
   */
  export type InventoryLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryLog.
     */
    data: XOR<InventoryLogCreateInput, InventoryLogUncheckedCreateInput>
  }

  /**
   * InventoryLog createMany
   */
  export type InventoryLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryLogs.
     */
    data: InventoryLogCreateManyInput | InventoryLogCreateManyInput[]
  }

  /**
   * InventoryLog update
   */
  export type InventoryLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryLog.
     */
    data: XOR<InventoryLogUpdateInput, InventoryLogUncheckedUpdateInput>
    /**
     * Choose, which InventoryLog to update.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog updateMany
   */
  export type InventoryLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryLogs.
     */
    data: XOR<InventoryLogUpdateManyMutationInput, InventoryLogUncheckedUpdateManyInput>
    /**
     * Filter which InventoryLogs to update
     */
    where?: InventoryLogWhereInput
    /**
     * Limit how many InventoryLogs to update.
     */
    limit?: number
  }

  /**
   * InventoryLog upsert
   */
  export type InventoryLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryLog to update in case it exists.
     */
    where: InventoryLogWhereUniqueInput
    /**
     * In case the InventoryLog found by the `where` argument doesn't exist, create a new InventoryLog with this data.
     */
    create: XOR<InventoryLogCreateInput, InventoryLogUncheckedCreateInput>
    /**
     * In case the InventoryLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryLogUpdateInput, InventoryLogUncheckedUpdateInput>
  }

  /**
   * InventoryLog delete
   */
  export type InventoryLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter which InventoryLog to delete.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog deleteMany
   */
  export type InventoryLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLogs to delete
     */
    where?: InventoryLogWhereInput
    /**
     * Limit how many InventoryLogs to delete.
     */
    limit?: number
  }

  /**
   * InventoryLog findRaw
   */
  export type InventoryLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryLog aggregateRaw
   */
  export type InventoryLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryLog without action
   */
  export type InventoryLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
    helpfulCount: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
    helpfulCount: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    userFullName: string | null
    rating: number | null
    comment: string | null
    helpfulCount: number | null
    verifiedPurchase: boolean | null
    status: $Enums.ReviewStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    userFullName: string | null
    rating: number | null
    comment: string | null
    helpfulCount: number | null
    verifiedPurchase: boolean | null
    status: $Enums.ReviewStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    productId: number
    userId: number
    userFullName: number
    rating: number
    comment: number
    images: number
    helpfulCount: number
    verifiedPurchase: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
    helpfulCount?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
    helpfulCount?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    userFullName?: true
    rating?: true
    comment?: true
    helpfulCount?: true
    verifiedPurchase?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    userFullName?: true
    rating?: true
    comment?: true
    helpfulCount?: true
    verifiedPurchase?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    userFullName?: true
    rating?: true
    comment?: true
    images?: true
    helpfulCount?: true
    verifiedPurchase?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    productId: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images: string[]
    helpfulCount: number
    verifiedPurchase: boolean
    status: $Enums.ReviewStatus
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    userFullName?: boolean
    rating?: boolean
    comment?: boolean
    images?: boolean
    helpfulCount?: boolean
    verifiedPurchase?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    helpfulVotes?: boolean | Review$helpfulVotesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    productId?: boolean
    userId?: boolean
    userFullName?: boolean
    rating?: boolean
    comment?: boolean
    images?: boolean
    helpfulCount?: boolean
    verifiedPurchase?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "userId" | "userFullName" | "rating" | "comment" | "images" | "helpfulCount" | "verifiedPurchase" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    helpfulVotes?: boolean | Review$helpfulVotesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      helpfulVotes: Prisma.$ReviewHelpfulVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      /**
       * UUID from user-service.
       */
      userId: string
      /**
       * Snapshot of user's display name at review time.
       */
      userFullName: string
      /**
       * 1–5 stars — enforced at the service layer.
       */
      rating: number
      comment: string
      /**
       * Array of image URLs uploaded with the review.
       */
      images: string[]
      helpfulCount: number
      verifiedPurchase: boolean
      status: $Enums.ReviewStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {ReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Review.
     * @param {ReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    helpfulVotes<T extends Review$helpfulVotesArgs<ExtArgs> = {}>(args?: Subset<T, Review$helpfulVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly productId: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly userFullName: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly images: FieldRef<"Review", 'String[]'>
    readonly helpfulCount: FieldRef<"Review", 'Int'>
    readonly verifiedPurchase: FieldRef<"Review", 'Boolean'>
    readonly status: FieldRef<"Review", 'ReviewStatus'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review findRaw
   */
  export type ReviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Review aggregateRaw
   */
  export type ReviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Review.helpfulVotes
   */
  export type Review$helpfulVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    where?: ReviewHelpfulVoteWhereInput
    orderBy?: ReviewHelpfulVoteOrderByWithRelationInput | ReviewHelpfulVoteOrderByWithRelationInput[]
    cursor?: ReviewHelpfulVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewHelpfulVoteScalarFieldEnum | ReviewHelpfulVoteScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model ReviewHelpfulVote
   */

  export type AggregateReviewHelpfulVote = {
    _count: ReviewHelpfulVoteCountAggregateOutputType | null
    _min: ReviewHelpfulVoteMinAggregateOutputType | null
    _max: ReviewHelpfulVoteMaxAggregateOutputType | null
  }

  export type ReviewHelpfulVoteMinAggregateOutputType = {
    id: string | null
    reviewId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ReviewHelpfulVoteMaxAggregateOutputType = {
    id: string | null
    reviewId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ReviewHelpfulVoteCountAggregateOutputType = {
    id: number
    reviewId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ReviewHelpfulVoteMinAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    createdAt?: true
  }

  export type ReviewHelpfulVoteMaxAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    createdAt?: true
  }

  export type ReviewHelpfulVoteCountAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewHelpfulVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewHelpfulVote to aggregate.
     */
    where?: ReviewHelpfulVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewHelpfulVotes to fetch.
     */
    orderBy?: ReviewHelpfulVoteOrderByWithRelationInput | ReviewHelpfulVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewHelpfulVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewHelpfulVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewHelpfulVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewHelpfulVotes
    **/
    _count?: true | ReviewHelpfulVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewHelpfulVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewHelpfulVoteMaxAggregateInputType
  }

  export type GetReviewHelpfulVoteAggregateType<T extends ReviewHelpfulVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewHelpfulVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewHelpfulVote[P]>
      : GetScalarType<T[P], AggregateReviewHelpfulVote[P]>
  }




  export type ReviewHelpfulVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewHelpfulVoteWhereInput
    orderBy?: ReviewHelpfulVoteOrderByWithAggregationInput | ReviewHelpfulVoteOrderByWithAggregationInput[]
    by: ReviewHelpfulVoteScalarFieldEnum[] | ReviewHelpfulVoteScalarFieldEnum
    having?: ReviewHelpfulVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewHelpfulVoteCountAggregateInputType | true
    _min?: ReviewHelpfulVoteMinAggregateInputType
    _max?: ReviewHelpfulVoteMaxAggregateInputType
  }

  export type ReviewHelpfulVoteGroupByOutputType = {
    id: string
    reviewId: string
    userId: string
    createdAt: Date
    _count: ReviewHelpfulVoteCountAggregateOutputType | null
    _min: ReviewHelpfulVoteMinAggregateOutputType | null
    _max: ReviewHelpfulVoteMaxAggregateOutputType | null
  }

  type GetReviewHelpfulVoteGroupByPayload<T extends ReviewHelpfulVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewHelpfulVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewHelpfulVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewHelpfulVoteGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewHelpfulVoteGroupByOutputType[P]>
        }
      >
    >


  export type ReviewHelpfulVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    createdAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewHelpfulVote"]>



  export type ReviewHelpfulVoteSelectScalar = {
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ReviewHelpfulVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "userId" | "createdAt", ExtArgs["result"]["reviewHelpfulVote"]>
  export type ReviewHelpfulVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ReviewHelpfulVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewHelpfulVote"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewId: string
      /**
       * UUID from user-service.
       */
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["reviewHelpfulVote"]>
    composites: {}
  }

  type ReviewHelpfulVoteGetPayload<S extends boolean | null | undefined | ReviewHelpfulVoteDefaultArgs> = $Result.GetResult<Prisma.$ReviewHelpfulVotePayload, S>

  type ReviewHelpfulVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewHelpfulVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewHelpfulVoteCountAggregateInputType | true
    }

  export interface ReviewHelpfulVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewHelpfulVote'], meta: { name: 'ReviewHelpfulVote' } }
    /**
     * Find zero or one ReviewHelpfulVote that matches the filter.
     * @param {ReviewHelpfulVoteFindUniqueArgs} args - Arguments to find a ReviewHelpfulVote
     * @example
     * // Get one ReviewHelpfulVote
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewHelpfulVoteFindUniqueArgs>(args: SelectSubset<T, ReviewHelpfulVoteFindUniqueArgs<ExtArgs>>): Prisma__ReviewHelpfulVoteClient<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewHelpfulVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewHelpfulVoteFindUniqueOrThrowArgs} args - Arguments to find a ReviewHelpfulVote
     * @example
     * // Get one ReviewHelpfulVote
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewHelpfulVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewHelpfulVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewHelpfulVoteClient<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewHelpfulVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewHelpfulVoteFindFirstArgs} args - Arguments to find a ReviewHelpfulVote
     * @example
     * // Get one ReviewHelpfulVote
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewHelpfulVoteFindFirstArgs>(args?: SelectSubset<T, ReviewHelpfulVoteFindFirstArgs<ExtArgs>>): Prisma__ReviewHelpfulVoteClient<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewHelpfulVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewHelpfulVoteFindFirstOrThrowArgs} args - Arguments to find a ReviewHelpfulVote
     * @example
     * // Get one ReviewHelpfulVote
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewHelpfulVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewHelpfulVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewHelpfulVoteClient<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewHelpfulVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewHelpfulVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewHelpfulVotes
     * const reviewHelpfulVotes = await prisma.reviewHelpfulVote.findMany()
     * 
     * // Get first 10 ReviewHelpfulVotes
     * const reviewHelpfulVotes = await prisma.reviewHelpfulVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewHelpfulVoteWithIdOnly = await prisma.reviewHelpfulVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewHelpfulVoteFindManyArgs>(args?: SelectSubset<T, ReviewHelpfulVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewHelpfulVote.
     * @param {ReviewHelpfulVoteCreateArgs} args - Arguments to create a ReviewHelpfulVote.
     * @example
     * // Create one ReviewHelpfulVote
     * const ReviewHelpfulVote = await prisma.reviewHelpfulVote.create({
     *   data: {
     *     // ... data to create a ReviewHelpfulVote
     *   }
     * })
     * 
     */
    create<T extends ReviewHelpfulVoteCreateArgs>(args: SelectSubset<T, ReviewHelpfulVoteCreateArgs<ExtArgs>>): Prisma__ReviewHelpfulVoteClient<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewHelpfulVotes.
     * @param {ReviewHelpfulVoteCreateManyArgs} args - Arguments to create many ReviewHelpfulVotes.
     * @example
     * // Create many ReviewHelpfulVotes
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewHelpfulVoteCreateManyArgs>(args?: SelectSubset<T, ReviewHelpfulVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewHelpfulVote.
     * @param {ReviewHelpfulVoteDeleteArgs} args - Arguments to delete one ReviewHelpfulVote.
     * @example
     * // Delete one ReviewHelpfulVote
     * const ReviewHelpfulVote = await prisma.reviewHelpfulVote.delete({
     *   where: {
     *     // ... filter to delete one ReviewHelpfulVote
     *   }
     * })
     * 
     */
    delete<T extends ReviewHelpfulVoteDeleteArgs>(args: SelectSubset<T, ReviewHelpfulVoteDeleteArgs<ExtArgs>>): Prisma__ReviewHelpfulVoteClient<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewHelpfulVote.
     * @param {ReviewHelpfulVoteUpdateArgs} args - Arguments to update one ReviewHelpfulVote.
     * @example
     * // Update one ReviewHelpfulVote
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewHelpfulVoteUpdateArgs>(args: SelectSubset<T, ReviewHelpfulVoteUpdateArgs<ExtArgs>>): Prisma__ReviewHelpfulVoteClient<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewHelpfulVotes.
     * @param {ReviewHelpfulVoteDeleteManyArgs} args - Arguments to filter ReviewHelpfulVotes to delete.
     * @example
     * // Delete a few ReviewHelpfulVotes
     * const { count } = await prisma.reviewHelpfulVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewHelpfulVoteDeleteManyArgs>(args?: SelectSubset<T, ReviewHelpfulVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewHelpfulVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewHelpfulVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewHelpfulVotes
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewHelpfulVoteUpdateManyArgs>(args: SelectSubset<T, ReviewHelpfulVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewHelpfulVote.
     * @param {ReviewHelpfulVoteUpsertArgs} args - Arguments to update or create a ReviewHelpfulVote.
     * @example
     * // Update or create a ReviewHelpfulVote
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.upsert({
     *   create: {
     *     // ... data to create a ReviewHelpfulVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewHelpfulVote we want to update
     *   }
     * })
     */
    upsert<T extends ReviewHelpfulVoteUpsertArgs>(args: SelectSubset<T, ReviewHelpfulVoteUpsertArgs<ExtArgs>>): Prisma__ReviewHelpfulVoteClient<$Result.GetResult<Prisma.$ReviewHelpfulVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewHelpfulVotes that matches the filter.
     * @param {ReviewHelpfulVoteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReviewHelpfulVoteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ReviewHelpfulVote.
     * @param {ReviewHelpfulVoteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reviewHelpfulVote = await prisma.reviewHelpfulVote.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReviewHelpfulVoteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ReviewHelpfulVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewHelpfulVoteCountArgs} args - Arguments to filter ReviewHelpfulVotes to count.
     * @example
     * // Count the number of ReviewHelpfulVotes
     * const count = await prisma.reviewHelpfulVote.count({
     *   where: {
     *     // ... the filter for the ReviewHelpfulVotes we want to count
     *   }
     * })
    **/
    count<T extends ReviewHelpfulVoteCountArgs>(
      args?: Subset<T, ReviewHelpfulVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewHelpfulVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewHelpfulVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewHelpfulVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewHelpfulVoteAggregateArgs>(args: Subset<T, ReviewHelpfulVoteAggregateArgs>): Prisma.PrismaPromise<GetReviewHelpfulVoteAggregateType<T>>

    /**
     * Group by ReviewHelpfulVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewHelpfulVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewHelpfulVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewHelpfulVoteGroupByArgs['orderBy'] }
        : { orderBy?: ReviewHelpfulVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewHelpfulVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewHelpfulVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewHelpfulVote model
   */
  readonly fields: ReviewHelpfulVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewHelpfulVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewHelpfulVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewHelpfulVote model
   */
  interface ReviewHelpfulVoteFieldRefs {
    readonly id: FieldRef<"ReviewHelpfulVote", 'String'>
    readonly reviewId: FieldRef<"ReviewHelpfulVote", 'String'>
    readonly userId: FieldRef<"ReviewHelpfulVote", 'String'>
    readonly createdAt: FieldRef<"ReviewHelpfulVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewHelpfulVote findUnique
   */
  export type ReviewHelpfulVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewHelpfulVote to fetch.
     */
    where: ReviewHelpfulVoteWhereUniqueInput
  }

  /**
   * ReviewHelpfulVote findUniqueOrThrow
   */
  export type ReviewHelpfulVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewHelpfulVote to fetch.
     */
    where: ReviewHelpfulVoteWhereUniqueInput
  }

  /**
   * ReviewHelpfulVote findFirst
   */
  export type ReviewHelpfulVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewHelpfulVote to fetch.
     */
    where?: ReviewHelpfulVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewHelpfulVotes to fetch.
     */
    orderBy?: ReviewHelpfulVoteOrderByWithRelationInput | ReviewHelpfulVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewHelpfulVotes.
     */
    cursor?: ReviewHelpfulVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewHelpfulVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewHelpfulVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewHelpfulVotes.
     */
    distinct?: ReviewHelpfulVoteScalarFieldEnum | ReviewHelpfulVoteScalarFieldEnum[]
  }

  /**
   * ReviewHelpfulVote findFirstOrThrow
   */
  export type ReviewHelpfulVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewHelpfulVote to fetch.
     */
    where?: ReviewHelpfulVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewHelpfulVotes to fetch.
     */
    orderBy?: ReviewHelpfulVoteOrderByWithRelationInput | ReviewHelpfulVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewHelpfulVotes.
     */
    cursor?: ReviewHelpfulVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewHelpfulVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewHelpfulVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewHelpfulVotes.
     */
    distinct?: ReviewHelpfulVoteScalarFieldEnum | ReviewHelpfulVoteScalarFieldEnum[]
  }

  /**
   * ReviewHelpfulVote findMany
   */
  export type ReviewHelpfulVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewHelpfulVotes to fetch.
     */
    where?: ReviewHelpfulVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewHelpfulVotes to fetch.
     */
    orderBy?: ReviewHelpfulVoteOrderByWithRelationInput | ReviewHelpfulVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewHelpfulVotes.
     */
    cursor?: ReviewHelpfulVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewHelpfulVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewHelpfulVotes.
     */
    skip?: number
    distinct?: ReviewHelpfulVoteScalarFieldEnum | ReviewHelpfulVoteScalarFieldEnum[]
  }

  /**
   * ReviewHelpfulVote create
   */
  export type ReviewHelpfulVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewHelpfulVote.
     */
    data: XOR<ReviewHelpfulVoteCreateInput, ReviewHelpfulVoteUncheckedCreateInput>
  }

  /**
   * ReviewHelpfulVote createMany
   */
  export type ReviewHelpfulVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewHelpfulVotes.
     */
    data: ReviewHelpfulVoteCreateManyInput | ReviewHelpfulVoteCreateManyInput[]
  }

  /**
   * ReviewHelpfulVote update
   */
  export type ReviewHelpfulVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewHelpfulVote.
     */
    data: XOR<ReviewHelpfulVoteUpdateInput, ReviewHelpfulVoteUncheckedUpdateInput>
    /**
     * Choose, which ReviewHelpfulVote to update.
     */
    where: ReviewHelpfulVoteWhereUniqueInput
  }

  /**
   * ReviewHelpfulVote updateMany
   */
  export type ReviewHelpfulVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewHelpfulVotes.
     */
    data: XOR<ReviewHelpfulVoteUpdateManyMutationInput, ReviewHelpfulVoteUncheckedUpdateManyInput>
    /**
     * Filter which ReviewHelpfulVotes to update
     */
    where?: ReviewHelpfulVoteWhereInput
    /**
     * Limit how many ReviewHelpfulVotes to update.
     */
    limit?: number
  }

  /**
   * ReviewHelpfulVote upsert
   */
  export type ReviewHelpfulVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewHelpfulVote to update in case it exists.
     */
    where: ReviewHelpfulVoteWhereUniqueInput
    /**
     * In case the ReviewHelpfulVote found by the `where` argument doesn't exist, create a new ReviewHelpfulVote with this data.
     */
    create: XOR<ReviewHelpfulVoteCreateInput, ReviewHelpfulVoteUncheckedCreateInput>
    /**
     * In case the ReviewHelpfulVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewHelpfulVoteUpdateInput, ReviewHelpfulVoteUncheckedUpdateInput>
  }

  /**
   * ReviewHelpfulVote delete
   */
  export type ReviewHelpfulVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
    /**
     * Filter which ReviewHelpfulVote to delete.
     */
    where: ReviewHelpfulVoteWhereUniqueInput
  }

  /**
   * ReviewHelpfulVote deleteMany
   */
  export type ReviewHelpfulVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewHelpfulVotes to delete
     */
    where?: ReviewHelpfulVoteWhereInput
    /**
     * Limit how many ReviewHelpfulVotes to delete.
     */
    limit?: number
  }

  /**
   * ReviewHelpfulVote findRaw
   */
  export type ReviewHelpfulVoteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ReviewHelpfulVote aggregateRaw
   */
  export type ReviewHelpfulVoteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ReviewHelpfulVote without action
   */
  export type ReviewHelpfulVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewHelpfulVote
     */
    select?: ReviewHelpfulVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewHelpfulVote
     */
    omit?: ReviewHelpfulVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewHelpfulVoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    imageUrl: 'imageUrl',
    parentId: 'parentId',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    sku: 'sku',
    brand: 'brand',
    price: 'price',
    discountedPrice: 'discountedPrice',
    categoryId: 'categoryId',
    iotSpecs: 'iotSpecs',
    images: 'images',
    tags: 'tags',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    available: 'available',
    reserved: 'reserved',
    reorderThreshold: 'reorderThreshold',
    warehouseLocation: 'warehouseLocation',
    lastRestockedAt: 'lastRestockedAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryLogScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    actorId: 'actorId',
    type: 'type',
    quantityDelta: 'quantityDelta',
    stockAfter: 'stockAfter',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type InventoryLogScalarFieldEnum = (typeof InventoryLogScalarFieldEnum)[keyof typeof InventoryLogScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    userFullName: 'userFullName',
    rating: 'rating',
    comment: 'comment',
    images: 'images',
    helpfulCount: 'helpfulCount',
    verifiedPurchase: 'verifiedPurchase',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ReviewHelpfulVoteScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ReviewHelpfulVoteScalarFieldEnum = (typeof ReviewHelpfulVoteScalarFieldEnum)[keyof typeof ReviewHelpfulVoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'InventoryLogType'
   */
  export type EnumInventoryLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryLogType'>
    


  /**
   * Reference to a field of type 'InventoryLogType[]'
   */
  export type ListEnumInventoryLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryLogType[]'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'ReviewStatus[]'
   */
  export type ListEnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    parentId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    parentId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Category"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Category"> | number
    isActive?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    discountedPrice?: FloatNullableFilter<"Product"> | number | null
    categoryId?: StringFilter<"Product"> | string
    iotSpecs?: JsonNullableFilter<"Product">
    images?: JsonNullableListFilter<"Product">
    tags?: StringNullableListFilter<"Product">
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    inventoryLogs?: InventoryLogListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discountedPrice?: SortOrder
    categoryId?: SortOrder
    iotSpecs?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    inventory?: InventoryOrderByWithRelationInput
    inventoryLogs?: InventoryLogOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    discountedPrice?: FloatNullableFilter<"Product"> | number | null
    categoryId?: StringFilter<"Product"> | string
    iotSpecs?: JsonNullableFilter<"Product">
    images?: JsonNullableListFilter<"Product">
    tags?: StringNullableListFilter<"Product">
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    inventoryLogs?: InventoryLogListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "slug" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discountedPrice?: SortOrder
    categoryId?: SortOrder
    iotSpecs?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    discountedPrice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    iotSpecs?: JsonNullableWithAggregatesFilter<"Product">
    images?: JsonNullableListFilter<"Product">
    tags?: StringNullableListFilter<"Product">
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    productId?: StringFilter<"Inventory"> | string
    available?: IntFilter<"Inventory"> | number
    reserved?: IntFilter<"Inventory"> | number
    reorderThreshold?: IntFilter<"Inventory"> | number
    warehouseLocation?: StringNullableFilter<"Inventory"> | string | null
    lastRestockedAt?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    available?: SortOrder
    reserved?: SortOrder
    reorderThreshold?: SortOrder
    warehouseLocation?: SortOrder
    lastRestockedAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    available?: IntFilter<"Inventory"> | number
    reserved?: IntFilter<"Inventory"> | number
    reorderThreshold?: IntFilter<"Inventory"> | number
    warehouseLocation?: StringNullableFilter<"Inventory"> | string | null
    lastRestockedAt?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    available?: SortOrder
    reserved?: SortOrder
    reorderThreshold?: SortOrder
    warehouseLocation?: SortOrder
    lastRestockedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    productId?: StringWithAggregatesFilter<"Inventory"> | string
    available?: IntWithAggregatesFilter<"Inventory"> | number
    reserved?: IntWithAggregatesFilter<"Inventory"> | number
    reorderThreshold?: IntWithAggregatesFilter<"Inventory"> | number
    warehouseLocation?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    lastRestockedAt?: DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type InventoryLogWhereInput = {
    AND?: InventoryLogWhereInput | InventoryLogWhereInput[]
    OR?: InventoryLogWhereInput[]
    NOT?: InventoryLogWhereInput | InventoryLogWhereInput[]
    id?: StringFilter<"InventoryLog"> | string
    productId?: StringFilter<"InventoryLog"> | string
    actorId?: StringFilter<"InventoryLog"> | string
    type?: EnumInventoryLogTypeFilter<"InventoryLog"> | $Enums.InventoryLogType
    quantityDelta?: IntFilter<"InventoryLog"> | number
    stockAfter?: IntFilter<"InventoryLog"> | number
    reason?: StringNullableFilter<"InventoryLog"> | string | null
    createdAt?: DateTimeFilter<"InventoryLog"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type InventoryLogOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    quantityDelta?: SortOrder
    stockAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type InventoryLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryLogWhereInput | InventoryLogWhereInput[]
    OR?: InventoryLogWhereInput[]
    NOT?: InventoryLogWhereInput | InventoryLogWhereInput[]
    productId?: StringFilter<"InventoryLog"> | string
    actorId?: StringFilter<"InventoryLog"> | string
    type?: EnumInventoryLogTypeFilter<"InventoryLog"> | $Enums.InventoryLogType
    quantityDelta?: IntFilter<"InventoryLog"> | number
    stockAfter?: IntFilter<"InventoryLog"> | number
    reason?: StringNullableFilter<"InventoryLog"> | string | null
    createdAt?: DateTimeFilter<"InventoryLog"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type InventoryLogOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    quantityDelta?: SortOrder
    stockAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryLogCountOrderByAggregateInput
    _avg?: InventoryLogAvgOrderByAggregateInput
    _max?: InventoryLogMaxOrderByAggregateInput
    _min?: InventoryLogMinOrderByAggregateInput
    _sum?: InventoryLogSumOrderByAggregateInput
  }

  export type InventoryLogScalarWhereWithAggregatesInput = {
    AND?: InventoryLogScalarWhereWithAggregatesInput | InventoryLogScalarWhereWithAggregatesInput[]
    OR?: InventoryLogScalarWhereWithAggregatesInput[]
    NOT?: InventoryLogScalarWhereWithAggregatesInput | InventoryLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryLog"> | string
    productId?: StringWithAggregatesFilter<"InventoryLog"> | string
    actorId?: StringWithAggregatesFilter<"InventoryLog"> | string
    type?: EnumInventoryLogTypeWithAggregatesFilter<"InventoryLog"> | $Enums.InventoryLogType
    quantityDelta?: IntWithAggregatesFilter<"InventoryLog"> | number
    stockAfter?: IntWithAggregatesFilter<"InventoryLog"> | number
    reason?: StringNullableWithAggregatesFilter<"InventoryLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryLog"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    productId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    userFullName?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    images?: StringNullableListFilter<"Review">
    helpfulCount?: IntFilter<"Review"> | number
    verifiedPurchase?: BoolFilter<"Review"> | boolean
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    helpfulVotes?: ReviewHelpfulVoteListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    userFullName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    images?: SortOrder
    helpfulCount?: SortOrder
    verifiedPurchase?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    helpfulVotes?: ReviewHelpfulVoteOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    productId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    userFullName?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    images?: StringNullableListFilter<"Review">
    helpfulCount?: IntFilter<"Review"> | number
    verifiedPurchase?: BoolFilter<"Review"> | boolean
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    helpfulVotes?: ReviewHelpfulVoteListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    userFullName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    images?: SortOrder
    helpfulCount?: SortOrder
    verifiedPurchase?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    productId?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    userFullName?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    images?: StringNullableListFilter<"Review">
    helpfulCount?: IntWithAggregatesFilter<"Review"> | number
    verifiedPurchase?: BoolWithAggregatesFilter<"Review"> | boolean
    status?: EnumReviewStatusWithAggregatesFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ReviewHelpfulVoteWhereInput = {
    AND?: ReviewHelpfulVoteWhereInput | ReviewHelpfulVoteWhereInput[]
    OR?: ReviewHelpfulVoteWhereInput[]
    NOT?: ReviewHelpfulVoteWhereInput | ReviewHelpfulVoteWhereInput[]
    id?: StringFilter<"ReviewHelpfulVote"> | string
    reviewId?: StringFilter<"ReviewHelpfulVote"> | string
    userId?: StringFilter<"ReviewHelpfulVote"> | string
    createdAt?: DateTimeFilter<"ReviewHelpfulVote"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ReviewHelpfulVoteOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type ReviewHelpfulVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reviewId_userId?: ReviewHelpfulVoteReviewIdUserIdCompoundUniqueInput
    AND?: ReviewHelpfulVoteWhereInput | ReviewHelpfulVoteWhereInput[]
    OR?: ReviewHelpfulVoteWhereInput[]
    NOT?: ReviewHelpfulVoteWhereInput | ReviewHelpfulVoteWhereInput[]
    reviewId?: StringFilter<"ReviewHelpfulVote"> | string
    userId?: StringFilter<"ReviewHelpfulVote"> | string
    createdAt?: DateTimeFilter<"ReviewHelpfulVote"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id" | "reviewId_userId">

  export type ReviewHelpfulVoteOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewHelpfulVoteCountOrderByAggregateInput
    _max?: ReviewHelpfulVoteMaxOrderByAggregateInput
    _min?: ReviewHelpfulVoteMinOrderByAggregateInput
  }

  export type ReviewHelpfulVoteScalarWhereWithAggregatesInput = {
    AND?: ReviewHelpfulVoteScalarWhereWithAggregatesInput | ReviewHelpfulVoteScalarWhereWithAggregatesInput[]
    OR?: ReviewHelpfulVoteScalarWhereWithAggregatesInput[]
    NOT?: ReviewHelpfulVoteScalarWhereWithAggregatesInput | ReviewHelpfulVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewHelpfulVote"> | string
    reviewId?: StringWithAggregatesFilter<"ReviewHelpfulVote"> | string
    userId?: StringWithAggregatesFilter<"ReviewHelpfulVote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReviewHelpfulVote"> | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    parentId?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    parentId?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    inventory?: InventoryCreateNestedOneWithoutProductInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    categoryId: string
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    inventory?: InventoryUpdateOneWithoutProductNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    categoryId: string
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    id?: string
    available?: number
    reserved?: number
    reorderThreshold?: number
    warehouseLocation?: string | null
    lastRestockedAt?: Date | string | null
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    productId: string
    available?: number
    reserved?: number
    reorderThreshold?: number
    warehouseLocation?: string | null
    lastRestockedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type InventoryUpdateInput = {
    available?: IntFieldUpdateOperationsInput | number
    reserved?: IntFieldUpdateOperationsInput | number
    reorderThreshold?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    available?: IntFieldUpdateOperationsInput | number
    reserved?: IntFieldUpdateOperationsInput | number
    reorderThreshold?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyInput = {
    id?: string
    productId: string
    available?: number
    reserved?: number
    reorderThreshold?: number
    warehouseLocation?: string | null
    lastRestockedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    available?: IntFieldUpdateOperationsInput | number
    reserved?: IntFieldUpdateOperationsInput | number
    reorderThreshold?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    available?: IntFieldUpdateOperationsInput | number
    reserved?: IntFieldUpdateOperationsInput | number
    reorderThreshold?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogCreateInput = {
    id?: string
    actorId: string
    type: $Enums.InventoryLogType
    quantityDelta: number
    stockAfter: number
    reason?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryLogsInput
  }

  export type InventoryLogUncheckedCreateInput = {
    id?: string
    productId: string
    actorId: string
    type: $Enums.InventoryLogType
    quantityDelta: number
    stockAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type InventoryLogUpdateInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryLogTypeFieldUpdateOperationsInput | $Enums.InventoryLogType
    quantityDelta?: IntFieldUpdateOperationsInput | number
    stockAfter?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryLogsNestedInput
  }

  export type InventoryLogUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryLogTypeFieldUpdateOperationsInput | $Enums.InventoryLogType
    quantityDelta?: IntFieldUpdateOperationsInput | number
    stockAfter?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogCreateManyInput = {
    id?: string
    productId: string
    actorId: string
    type: $Enums.InventoryLogType
    quantityDelta: number
    stockAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type InventoryLogUpdateManyMutationInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryLogTypeFieldUpdateOperationsInput | $Enums.InventoryLogType
    quantityDelta?: IntFieldUpdateOperationsInput | number
    stockAfter?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryLogTypeFieldUpdateOperationsInput | $Enums.InventoryLogType
    quantityDelta?: IntFieldUpdateOperationsInput | number
    stockAfter?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images?: ReviewCreateimagesInput | string[]
    helpfulCount?: number
    verifiedPurchase?: boolean
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
    helpfulVotes?: ReviewHelpfulVoteCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    productId: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images?: ReviewCreateimagesInput | string[]
    helpfulCount?: number
    verifiedPurchase?: boolean
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    helpfulVotes?: ReviewHelpfulVoteUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
    helpfulVotes?: ReviewHelpfulVoteUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    helpfulVotes?: ReviewHelpfulVoteUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    productId: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images?: ReviewCreateimagesInput | string[]
    helpfulCount?: number
    verifiedPurchase?: boolean
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewHelpfulVoteCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    review: ReviewCreateNestedOneWithoutHelpfulVotesInput
  }

  export type ReviewHelpfulVoteUncheckedCreateInput = {
    id?: string
    reviewId: string
    userId: string
    createdAt?: Date | string
  }

  export type ReviewHelpfulVoteUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutHelpfulVotesNestedInput
  }

  export type ReviewHelpfulVoteUncheckedUpdateInput = {
    reviewId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewHelpfulVoteCreateManyInput = {
    id?: string
    reviewId: string
    userId: string
    createdAt?: Date | string
  }

  export type ReviewHelpfulVoteUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewHelpfulVoteUncheckedUpdateManyInput = {
    reviewId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    parentId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    parentId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    parentId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: InventoryWhereInput | null
    isNot?: InventoryWhereInput | null
  }

  export type InventoryLogListRelationFilter = {
    every?: InventoryLogWhereInput
    some?: InventoryLogWhereInput
    none?: InventoryLogWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type InventoryLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discountedPrice?: SortOrder
    categoryId?: SortOrder
    iotSpecs?: SortOrder
    images?: SortOrder
    tags?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    discountedPrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discountedPrice?: SortOrder
    categoryId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discountedPrice?: SortOrder
    categoryId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    discountedPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    available?: SortOrder
    reserved?: SortOrder
    reorderThreshold?: SortOrder
    warehouseLocation?: SortOrder
    lastRestockedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    available?: SortOrder
    reserved?: SortOrder
    reorderThreshold?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    available?: SortOrder
    reserved?: SortOrder
    reorderThreshold?: SortOrder
    warehouseLocation?: SortOrder
    lastRestockedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    available?: SortOrder
    reserved?: SortOrder
    reorderThreshold?: SortOrder
    warehouseLocation?: SortOrder
    lastRestockedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    available?: SortOrder
    reserved?: SortOrder
    reorderThreshold?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumInventoryLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryLogType | EnumInventoryLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryLogType[] | ListEnumInventoryLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryLogType[] | ListEnumInventoryLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryLogTypeFilter<$PrismaModel> | $Enums.InventoryLogType
  }

  export type InventoryLogCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    quantityDelta?: SortOrder
    stockAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryLogAvgOrderByAggregateInput = {
    quantityDelta?: SortOrder
    stockAfter?: SortOrder
  }

  export type InventoryLogMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    quantityDelta?: SortOrder
    stockAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryLogMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    quantityDelta?: SortOrder
    stockAfter?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryLogSumOrderByAggregateInput = {
    quantityDelta?: SortOrder
    stockAfter?: SortOrder
  }

  export type EnumInventoryLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryLogType | EnumInventoryLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryLogType[] | ListEnumInventoryLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryLogType[] | ListEnumInventoryLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.InventoryLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryLogTypeFilter<$PrismaModel>
    _max?: NestedEnumInventoryLogTypeFilter<$PrismaModel>
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type ReviewHelpfulVoteListRelationFilter = {
    every?: ReviewHelpfulVoteWhereInput
    some?: ReviewHelpfulVoteWhereInput
    none?: ReviewHelpfulVoteWhereInput
  }

  export type ReviewHelpfulVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    userFullName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    images?: SortOrder
    helpfulCount?: SortOrder
    verifiedPurchase?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
    helpfulCount?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    userFullName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    helpfulCount?: SortOrder
    verifiedPurchase?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    userFullName?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    helpfulCount?: SortOrder
    verifiedPurchase?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
    helpfulCount?: SortOrder
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type ReviewHelpfulVoteReviewIdUserIdCompoundUniqueInput = {
    reviewId: string
    userId: string
  }

  export type ReviewHelpfulVoteCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewHelpfulVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewHelpfulVoteMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateimagesInput = {
    set: InputJsonValue[]
  }

  export type ProductCreatetagsInput = {
    set: string[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type InventoryCreateNestedOneWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput
    connect?: InventoryWhereUniqueInput
  }

  export type InventoryLogCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryLogCreateWithoutProductInput, InventoryLogUncheckedCreateWithoutProductInput> | InventoryLogCreateWithoutProductInput[] | InventoryLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutProductInput | InventoryLogCreateOrConnectWithoutProductInput[]
    createMany?: InventoryLogCreateManyProductInputEnvelope
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput
    connect?: InventoryWhereUniqueInput
  }

  export type InventoryLogUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryLogCreateWithoutProductInput, InventoryLogUncheckedCreateWithoutProductInput> | InventoryLogCreateWithoutProductInput[] | InventoryLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutProductInput | InventoryLogCreateOrConnectWithoutProductInput[]
    createMany?: InventoryLogCreateManyProductInputEnvelope
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ProductUpdateimagesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type InventoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput
    upsert?: InventoryUpsertWithoutProductInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutProductInput, InventoryUpdateWithoutProductInput>, InventoryUncheckedUpdateWithoutProductInput>
  }

  export type InventoryLogUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryLogCreateWithoutProductInput, InventoryLogUncheckedCreateWithoutProductInput> | InventoryLogCreateWithoutProductInput[] | InventoryLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutProductInput | InventoryLogCreateOrConnectWithoutProductInput[]
    upsert?: InventoryLogUpsertWithWhereUniqueWithoutProductInput | InventoryLogUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryLogCreateManyProductInputEnvelope
    set?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    disconnect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    delete?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    update?: InventoryLogUpdateWithWhereUniqueWithoutProductInput | InventoryLogUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryLogUpdateManyWithWhereWithoutProductInput | InventoryLogUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput
    upsert?: InventoryUpsertWithoutProductInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutProductInput, InventoryUpdateWithoutProductInput>, InventoryUncheckedUpdateWithoutProductInput>
  }

  export type InventoryLogUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryLogCreateWithoutProductInput, InventoryLogUncheckedCreateWithoutProductInput> | InventoryLogCreateWithoutProductInput[] | InventoryLogUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutProductInput | InventoryLogCreateOrConnectWithoutProductInput[]
    upsert?: InventoryLogUpsertWithWhereUniqueWithoutProductInput | InventoryLogUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryLogCreateManyProductInputEnvelope
    set?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    disconnect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    delete?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    update?: InventoryLogUpdateWithWhereUniqueWithoutProductInput | InventoryLogUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryLogUpdateManyWithWhereWithoutProductInput | InventoryLogUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type ProductUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput
    upsert?: ProductUpsertWithoutInventoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryInput, ProductUpdateWithoutInventoryInput>, ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductCreateNestedOneWithoutInventoryLogsInput = {
    create?: XOR<ProductCreateWithoutInventoryLogsInput, ProductUncheckedCreateWithoutInventoryLogsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryLogsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumInventoryLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.InventoryLogType
  }

  export type ProductUpdateOneRequiredWithoutInventoryLogsNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryLogsInput, ProductUncheckedCreateWithoutInventoryLogsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryLogsInput
    upsert?: ProductUpsertWithoutInventoryLogsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryLogsInput, ProductUpdateWithoutInventoryLogsInput>, ProductUncheckedUpdateWithoutInventoryLogsInput>
  }

  export type ReviewCreateimagesInput = {
    set: string[]
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type ReviewHelpfulVoteCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewHelpfulVoteCreateWithoutReviewInput, ReviewHelpfulVoteUncheckedCreateWithoutReviewInput> | ReviewHelpfulVoteCreateWithoutReviewInput[] | ReviewHelpfulVoteUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewHelpfulVoteCreateOrConnectWithoutReviewInput | ReviewHelpfulVoteCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewHelpfulVoteCreateManyReviewInputEnvelope
    connect?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
  }

  export type ReviewHelpfulVoteUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewHelpfulVoteCreateWithoutReviewInput, ReviewHelpfulVoteUncheckedCreateWithoutReviewInput> | ReviewHelpfulVoteCreateWithoutReviewInput[] | ReviewHelpfulVoteUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewHelpfulVoteCreateOrConnectWithoutReviewInput | ReviewHelpfulVoteCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewHelpfulVoteCreateManyReviewInputEnvelope
    connect?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
  }

  export type ReviewUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewsInput, ProductUpdateWithoutReviewsInput>, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewHelpfulVoteUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewHelpfulVoteCreateWithoutReviewInput, ReviewHelpfulVoteUncheckedCreateWithoutReviewInput> | ReviewHelpfulVoteCreateWithoutReviewInput[] | ReviewHelpfulVoteUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewHelpfulVoteCreateOrConnectWithoutReviewInput | ReviewHelpfulVoteCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewHelpfulVoteUpsertWithWhereUniqueWithoutReviewInput | ReviewHelpfulVoteUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewHelpfulVoteCreateManyReviewInputEnvelope
    set?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
    disconnect?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
    delete?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
    connect?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
    update?: ReviewHelpfulVoteUpdateWithWhereUniqueWithoutReviewInput | ReviewHelpfulVoteUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewHelpfulVoteUpdateManyWithWhereWithoutReviewInput | ReviewHelpfulVoteUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewHelpfulVoteScalarWhereInput | ReviewHelpfulVoteScalarWhereInput[]
  }

  export type ReviewHelpfulVoteUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewHelpfulVoteCreateWithoutReviewInput, ReviewHelpfulVoteUncheckedCreateWithoutReviewInput> | ReviewHelpfulVoteCreateWithoutReviewInput[] | ReviewHelpfulVoteUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewHelpfulVoteCreateOrConnectWithoutReviewInput | ReviewHelpfulVoteCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewHelpfulVoteUpsertWithWhereUniqueWithoutReviewInput | ReviewHelpfulVoteUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewHelpfulVoteCreateManyReviewInputEnvelope
    set?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
    disconnect?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
    delete?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
    connect?: ReviewHelpfulVoteWhereUniqueInput | ReviewHelpfulVoteWhereUniqueInput[]
    update?: ReviewHelpfulVoteUpdateWithWhereUniqueWithoutReviewInput | ReviewHelpfulVoteUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewHelpfulVoteUpdateManyWithWhereWithoutReviewInput | ReviewHelpfulVoteUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewHelpfulVoteScalarWhereInput | ReviewHelpfulVoteScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutHelpfulVotesInput = {
    create?: XOR<ReviewCreateWithoutHelpfulVotesInput, ReviewUncheckedCreateWithoutHelpfulVotesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutHelpfulVotesInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutHelpfulVotesNestedInput = {
    create?: XOR<ReviewCreateWithoutHelpfulVotesInput, ReviewUncheckedCreateWithoutHelpfulVotesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutHelpfulVotesInput
    upsert?: ReviewUpsertWithoutHelpfulVotesInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutHelpfulVotesInput, ReviewUpdateWithoutHelpfulVotesInput>, ReviewUncheckedUpdateWithoutHelpfulVotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumInventoryLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryLogType | EnumInventoryLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryLogType[] | ListEnumInventoryLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryLogType[] | ListEnumInventoryLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryLogTypeFilter<$PrismaModel> | $Enums.InventoryLogType
  }

  export type NestedEnumInventoryLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryLogType | EnumInventoryLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryLogType[] | ListEnumInventoryLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryLogType[] | ListEnumInventoryLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.InventoryLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryLogTypeFilter<$PrismaModel>
    _max?: NestedEnumInventoryLogTypeFilter<$PrismaModel>
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type CategoryCreateWithoutChildrenInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    parentId?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedOneWithoutProductInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    discountedPrice?: FloatNullableFilter<"Product"> | number | null
    categoryId?: StringFilter<"Product"> | string
    iotSpecs?: JsonNullableFilter<"Product">
    images?: JsonNullableListFilter<"Product">
    tags?: StringNullableListFilter<"Product">
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    parentId?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type InventoryCreateWithoutProductInput = {
    id?: string
    available?: number
    reserved?: number
    reorderThreshold?: number
    warehouseLocation?: string | null
    lastRestockedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type InventoryUncheckedCreateWithoutProductInput = {
    id?: string
    available?: number
    reserved?: number
    reorderThreshold?: number
    warehouseLocation?: string | null
    lastRestockedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutProductInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryLogCreateWithoutProductInput = {
    id?: string
    actorId: string
    type: $Enums.InventoryLogType
    quantityDelta: number
    stockAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type InventoryLogUncheckedCreateWithoutProductInput = {
    id?: string
    actorId: string
    type: $Enums.InventoryLogType
    quantityDelta: number
    stockAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type InventoryLogCreateOrConnectWithoutProductInput = {
    where: InventoryLogWhereUniqueInput
    create: XOR<InventoryLogCreateWithoutProductInput, InventoryLogUncheckedCreateWithoutProductInput>
  }

  export type InventoryLogCreateManyProductInputEnvelope = {
    data: InventoryLogCreateManyProductInput | InventoryLogCreateManyProductInput[]
  }

  export type ReviewCreateWithoutProductInput = {
    id?: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images?: ReviewCreateimagesInput | string[]
    helpfulCount?: number
    verifiedPurchase?: boolean
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    helpfulVotes?: ReviewHelpfulVoteCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images?: ReviewCreateimagesInput | string[]
    helpfulCount?: number
    verifiedPurchase?: boolean
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    helpfulVotes?: ReviewHelpfulVoteUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: ReviewCreateManyProductInput | ReviewCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type InventoryUpsertWithoutProductInput = {
    update: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutProductInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
  }

  export type InventoryUpdateWithoutProductInput = {
    available?: IntFieldUpdateOperationsInput | number
    reserved?: IntFieldUpdateOperationsInput | number
    reorderThreshold?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateWithoutProductInput = {
    available?: IntFieldUpdateOperationsInput | number
    reserved?: IntFieldUpdateOperationsInput | number
    reorderThreshold?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryLogWhereUniqueInput
    update: XOR<InventoryLogUpdateWithoutProductInput, InventoryLogUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryLogCreateWithoutProductInput, InventoryLogUncheckedCreateWithoutProductInput>
  }

  export type InventoryLogUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryLogWhereUniqueInput
    data: XOR<InventoryLogUpdateWithoutProductInput, InventoryLogUncheckedUpdateWithoutProductInput>
  }

  export type InventoryLogUpdateManyWithWhereWithoutProductInput = {
    where: InventoryLogScalarWhereInput
    data: XOR<InventoryLogUpdateManyMutationInput, InventoryLogUncheckedUpdateManyWithoutProductInput>
  }

  export type InventoryLogScalarWhereInput = {
    AND?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
    OR?: InventoryLogScalarWhereInput[]
    NOT?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
    id?: StringFilter<"InventoryLog"> | string
    productId?: StringFilter<"InventoryLog"> | string
    actorId?: StringFilter<"InventoryLog"> | string
    type?: EnumInventoryLogTypeFilter<"InventoryLog"> | $Enums.InventoryLogType
    quantityDelta?: IntFilter<"InventoryLog"> | number
    stockAfter?: IntFilter<"InventoryLog"> | number
    reason?: StringNullableFilter<"InventoryLog"> | string | null
    createdAt?: DateTimeFilter<"InventoryLog"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    productId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    userFullName?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    images?: StringNullableListFilter<"Review">
    helpfulCount?: IntFilter<"Review"> | number
    verifiedPurchase?: BoolFilter<"Review"> | boolean
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ProductCreateWithoutInventoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    categoryId: string
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
  }

  export type ProductUpsertWithoutInventoryInput = {
    update: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>
  }

  export type ProductUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutInventoryLogsInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    inventory?: InventoryCreateNestedOneWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryLogsInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    categoryId: string
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryLogsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryLogsInput, ProductUncheckedCreateWithoutInventoryLogsInput>
  }

  export type ProductUpsertWithoutInventoryLogsInput = {
    update: XOR<ProductUpdateWithoutInventoryLogsInput, ProductUncheckedUpdateWithoutInventoryLogsInput>
    create: XOR<ProductCreateWithoutInventoryLogsInput, ProductUncheckedCreateWithoutInventoryLogsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryLogsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryLogsInput, ProductUncheckedUpdateWithoutInventoryLogsInput>
  }

  export type ProductUpdateWithoutInventoryLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    inventory?: InventoryUpdateOneWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutReviewsInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    inventory?: InventoryCreateNestedOneWithoutProductInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    categoryId: string
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewHelpfulVoteCreateWithoutReviewInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReviewHelpfulVoteUncheckedCreateWithoutReviewInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReviewHelpfulVoteCreateOrConnectWithoutReviewInput = {
    where: ReviewHelpfulVoteWhereUniqueInput
    create: XOR<ReviewHelpfulVoteCreateWithoutReviewInput, ReviewHelpfulVoteUncheckedCreateWithoutReviewInput>
  }

  export type ReviewHelpfulVoteCreateManyReviewInputEnvelope = {
    data: ReviewHelpfulVoteCreateManyReviewInput | ReviewHelpfulVoteCreateManyReviewInput[]
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    inventory?: InventoryUpdateOneWithoutProductNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ReviewHelpfulVoteUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewHelpfulVoteWhereUniqueInput
    update: XOR<ReviewHelpfulVoteUpdateWithoutReviewInput, ReviewHelpfulVoteUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewHelpfulVoteCreateWithoutReviewInput, ReviewHelpfulVoteUncheckedCreateWithoutReviewInput>
  }

  export type ReviewHelpfulVoteUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewHelpfulVoteWhereUniqueInput
    data: XOR<ReviewHelpfulVoteUpdateWithoutReviewInput, ReviewHelpfulVoteUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewHelpfulVoteUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewHelpfulVoteScalarWhereInput
    data: XOR<ReviewHelpfulVoteUpdateManyMutationInput, ReviewHelpfulVoteUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewHelpfulVoteScalarWhereInput = {
    AND?: ReviewHelpfulVoteScalarWhereInput | ReviewHelpfulVoteScalarWhereInput[]
    OR?: ReviewHelpfulVoteScalarWhereInput[]
    NOT?: ReviewHelpfulVoteScalarWhereInput | ReviewHelpfulVoteScalarWhereInput[]
    id?: StringFilter<"ReviewHelpfulVote"> | string
    reviewId?: StringFilter<"ReviewHelpfulVote"> | string
    userId?: StringFilter<"ReviewHelpfulVote"> | string
    createdAt?: DateTimeFilter<"ReviewHelpfulVote"> | Date | string
  }

  export type ReviewCreateWithoutHelpfulVotesInput = {
    id?: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images?: ReviewCreateimagesInput | string[]
    helpfulCount?: number
    verifiedPurchase?: boolean
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutHelpfulVotesInput = {
    id?: string
    productId: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images?: ReviewCreateimagesInput | string[]
    helpfulCount?: number
    verifiedPurchase?: boolean
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutHelpfulVotesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutHelpfulVotesInput, ReviewUncheckedCreateWithoutHelpfulVotesInput>
  }

  export type ReviewUpsertWithoutHelpfulVotesInput = {
    update: XOR<ReviewUpdateWithoutHelpfulVotesInput, ReviewUncheckedUpdateWithoutHelpfulVotesInput>
    create: XOR<ReviewCreateWithoutHelpfulVotesInput, ReviewUncheckedCreateWithoutHelpfulVotesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutHelpfulVotesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutHelpfulVotesInput, ReviewUncheckedUpdateWithoutHelpfulVotesInput>
  }

  export type ReviewUpdateWithoutHelpfulVotesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutHelpfulVotesInput = {
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    sku: string
    brand?: string | null
    price: number
    discountedPrice?: number | null
    iotSpecs?: InputJsonValue | null
    images?: ProductCreateimagesInput | InputJsonValue[]
    tags?: ProductCreatetagsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneWithoutProductNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    discountedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    iotSpecs?: InputJsonValue | InputJsonValue | null
    images?: ProductUpdateimagesInput | InputJsonValue[]
    tags?: ProductUpdatetagsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogCreateManyProductInput = {
    id?: string
    actorId: string
    type: $Enums.InventoryLogType
    quantityDelta: number
    stockAfter: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyProductInput = {
    id?: string
    userId: string
    userFullName: string
    rating: number
    comment: string
    images?: ReviewCreateimagesInput | string[]
    helpfulCount?: number
    verifiedPurchase?: boolean
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryLogUpdateWithoutProductInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryLogTypeFieldUpdateOperationsInput | $Enums.InventoryLogType
    quantityDelta?: IntFieldUpdateOperationsInput | number
    stockAfter?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateWithoutProductInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryLogTypeFieldUpdateOperationsInput | $Enums.InventoryLogType
    quantityDelta?: IntFieldUpdateOperationsInput | number
    stockAfter?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateManyWithoutProductInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    type?: EnumInventoryLogTypeFieldUpdateOperationsInput | $Enums.InventoryLogType
    quantityDelta?: IntFieldUpdateOperationsInput | number
    stockAfter?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutProductInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    helpfulVotes?: ReviewHelpfulVoteUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    helpfulVotes?: ReviewHelpfulVoteUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutProductInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userFullName?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    images?: ReviewUpdateimagesInput | string[]
    helpfulCount?: IntFieldUpdateOperationsInput | number
    verifiedPurchase?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewHelpfulVoteCreateManyReviewInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReviewHelpfulVoteUpdateWithoutReviewInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewHelpfulVoteUncheckedUpdateWithoutReviewInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewHelpfulVoteUncheckedUpdateManyWithoutReviewInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}