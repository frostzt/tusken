import { makeTableRef, RowResult, RowType, TableRef } from "tusken"
import * as t from "./primitives"

export const featureFlag: TableRef<{
  id: t.int4
  enabled: t.bool | t.null
}, "featureFlag", "id", "enabled"> = /*#__PURE__*/ makeTableRef("featureFlag", "id", {
  id: t.int4,
  enabled: t.bool,
})

export const follow: TableRef<{
  id: t.int4
  follower: t.int4
  author: t.int4
}, "follow", "id", "id"> = /*#__PURE__*/ makeTableRef("follow", "id", {
  id: t.int4,
  follower: t.int4,
  author: t.int4,
})

export const foo: TableRef<{
  id: t.int4
  json: t.json | t.null
  jsonb: t.jsonb | t.null
}, "foo", "id", "id" | "json" | "jsonb"> = /*#__PURE__*/ makeTableRef("foo", "id", {
  id: t.int4,
  json: t.json,
  jsonb: t.jsonb,
})

export const like: TableRef<{
  id: t.int4
  tweet: t.int4
  author: t.int4
}, "like", "id", "id"> = /*#__PURE__*/ makeTableRef("like", "id", {
  id: t.int4,
  tweet: t.int4,
  author: t.int4,
})

export const tweet: TableRef<{
  id: t.int4
  author: t.int4
  text: t.text
}, "tweet", "id", "id"> = /*#__PURE__*/ makeTableRef("tweet", "id", {
  id: t.int4,
  author: t.int4,
  text: t.text,
})

export const user: TableRef<{
  id: t.int4
  name: t.text
  joinedAt: t.timestamptz
  bio: t.text | t.null
  featureFlags: t.array<t.int4>
}, "user", "id", "id" | "joinedAt" | "bio" | "featureFlags"> = /*#__PURE__*/ makeTableRef("user", "id", {
  id: t.int4,
  name: t.text,
  joinedAt: t.timestamptz,
  bio: t.text,
  featureFlags: t.array(t.int4),
})

// Materialized row types
export interface featureFlag extends RowResult<RowType<typeof featureFlag>> {}
export interface follow extends RowResult<RowType<typeof follow>> {}
export interface foo extends RowResult<RowType<typeof foo>> {}
export interface like extends RowResult<RowType<typeof like>> {}
export interface tweet extends RowResult<RowType<typeof tweet>> {}
export interface user extends RowResult<RowType<typeof user>> {}