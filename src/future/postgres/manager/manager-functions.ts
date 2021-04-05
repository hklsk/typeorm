import { AnyDataSource } from "../../core"
import { PostgresManager } from "./manager-type"

export function createPostgresManager(
  dataSource: AnyDataSource,
): PostgresManager<any> {
  function Options() {
    return {} as any
  }
  Options.select = () => {
    return {} as any
  }
  Options.where = () => {
    return {} as any
  }
  Options.order = () => {
    return {} as any
  }

  return {
    "@type": "Manager",
    findOptions: Options,
    repository(entity: any) {
      return {} as any
    },
    hasId() {
      return {} as any
    },
    getId() {
      return {} as any
    },
    create() {
      return {} as any
    },
    merge() {
      return {} as any
    },
    createQueryBuilder() {
      return {} as any
    },
    async query() {
      return {} as any
    },
    async transaction() {
      return null as any
    },
    async clear() {
      return {} as any
    },
    async increment() {
      return {} as any
    },
    async decrement() {
      return {} as any
    },
    async insert() {
      return {} as any
    },
    async update() {
      return {} as any
    },
    async updateBy() {
      return {} as any
    },
    async delete() {
      return {} as any
    },
    async deleteBy() {
      return {} as any
    },
    async archive() {
      return {} as any
    },
    async archiveBy() {
      return {} as any
    },
    async unarchive() {
      return {} as any
    },
    async unarchiveBy() {
      return {} as any
    },
    async find() {
      return {} as any
    },
    async findByIds() {
      return {} as any
    },
    async findOne() {
      return {} as any
    },
    async findOneOrFail() {
      return {} as any
    },
    async findOneById() {
      return {} as any
    },
    async findOneByIdOrFail() {
      return {} as any
    },
    async findAndCount() {
      return [] as any
    },
    async count() {
      return 0
    },
    async release() {
      return null as any
    },
  }
}