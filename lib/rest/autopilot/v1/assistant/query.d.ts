/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the QueryList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the parent Assistant.
 */
declare function QueryList(version: V1, assistantSid: string): QueryListInstance;

/**
 * Options to pass to update
 *
 * @property sampleSid - An optional reference to the Sample created from this query.
 * @property status - A string that described the query status. The values can be: `pending_review`, `reviewed`, `discarded`
 */
interface QueryInstanceUpdateOptions {
  sampleSid?: string;
  status?: string;
}

interface QueryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): QueryContext;
  /**
   * create a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: QueryListInstanceCreateOptions, callback?: (error: Error | null, item: QueryInstance) => any): Promise<QueryInstance>;
  /**
   * Streams QueryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: QueryListInstanceEachOptions, callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a query
   *
   * @param sid - A 34-character string that uniquely identifies this resource.
   */
  get(sid: string): QueryContext;
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: QueryListInstanceOptions, callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: QueryListInstancePageOptions, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
}

/**
 * Options to pass to create
 *
 * @property language - An [ISO language-country string](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) that specifies the language used for this query. For example: `en-US`.
 * @property modelBuild - The Sid or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property query - A user-provided string that uniquely identifies this resource as an alternative to the sid. It can be up to 2048 characters long.
 * @property tasks - Constraints the query to a set of tasks. Useful when you need to constrain the paths the user can take. Tasks should be comma separated task-unique-name-1, task-unique-name-2
 */
interface QueryListInstanceCreateOptions {
  language: string;
  modelBuild?: string;
  query: string;
  tasks?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property language - An [ISO language-country string](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) that specifies the language used for this query. For example: `en-US`.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property modelBuild - The Sid or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property status - A string that described the query status. The values can be: `pending_review`, `reviewed`, `discarded`
 */
interface QueryListInstanceEachOptions {
  callback?: (item: QueryInstance, done: (err?: Error) => void) => void;
  done?: Function;
  language?: string;
  limit?: number;
  modelBuild?: string;
  pageSize?: number;
  status?: string;
}

/**
 * Options to pass to list
 *
 * @property language - An [ISO language-country string](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) that specifies the language used for this query. For example: `en-US`.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property modelBuild - The Sid or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property status - A string that described the query status. The values can be: `pending_review`, `reviewed`, `discarded`
 */
interface QueryListInstanceOptions {
  language?: string;
  limit?: number;
  modelBuild?: string;
  pageSize?: number;
  status?: string;
}

/**
 * Options to pass to page
 *
 * @property language - An [ISO language-country string](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) that specifies the language used for this query. For example: `en-US`.
 * @property modelBuild - The Sid or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - A string that described the query status. The values can be: `pending_review`, `reviewed`, `discarded`
 */
interface QueryListInstancePageOptions {
  language?: string;
  modelBuild?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: string;
}

interface QueryPayload extends QueryResource, Page.TwilioResponsePayload {
}

interface QueryResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  language: string;
  model_build_sid: string;
  query: string;
  results: string;
  sample_sid: string;
  sid: string;
  source_channel: string;
  status: string;
  url: string;
}

interface QuerySolution {
  assistantSid?: string;
}


declare class QueryContext {
  /**
   * Initialize the QueryContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The unique ID of the Assistant.
   * @param sid - A 34-character string that uniquely identifies this resource.
   */
  constructor(version: V1, assistantSid: string, sid: string);

  /**
   * fetch a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: QueryInstance) => any): Promise<QueryInstance>;
  /**
   * remove a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: QueryInstance) => any): void;
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: QueryInstanceUpdateOptions, callback?: (error: Error | null, items: QueryInstance) => any): Promise<QueryInstance>;
}


declare class QueryInstance extends SerializableClass {
  /**
   * Initialize the QueryContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The unique ID of the Account that created this Query.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property results - The natural language analysis results which include the [Task](https://www.twilio.com/docs/autopilot/api/task) recognized, the confidence score, and a list of identified [Fields](https://www.twilio.com/docs/autopilot/api/task-field).
   * @property language - An [ISO language-country string](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) that specifies the language used for this query. For example: `en-US`
   * @property modelBuildSid - The unique ID of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) queried.
   * @property query - The end-user's natural language input.
   * @property sampleSid - An optional reference to the Sample created from this query.
   * @property assistantSid - The unique ID of the parent Assistant.
   * @property sid - A 34-character string that uniquely identifies this resource.
   * @property status - A string that describes the query status. The values can be: `pending_review`, `reviewed`, `discarded`
   * @property url - The url
   * @property sourceChannel - The communication channel where this end-user input came from
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the parent Assistant.
   * @param sid - A 34-character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: QueryPayload, assistantSid: string, sid: string);

  private _proxy: QueryContext;
  accountSid: string;
  assistantSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: QueryInstance) => any): void;
  language: string;
  modelBuildSid: string;
  query: string;
  /**
   * remove a QueryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: QueryInstance) => any): void;
  results: string;
  sampleSid: string;
  sid: string;
  sourceChannel: string;
  status: string;
  /**
   * Produce a plain JSON object version of the QueryInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a QueryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: QueryInstanceUpdateOptions, callback?: (error: Error | null, items: QueryInstance) => any): void;
  url: string;
}


declare class QueryPage extends Page<V1, QueryPayload, QueryResource, QueryInstance> {
  /**
   * Initialize the QueryPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: QuerySolution);

  /**
   * Build an instance of QueryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: QueryPayload): QueryInstance;
}

export { QueryContext, QueryInstance, QueryList, QueryListInstance, QueryListInstanceCreateOptions, QueryListInstanceEachOptions, QueryListInstanceOptions, QueryListInstancePageOptions, QueryPage, QueryPayload, QueryResource, QuerySolution }
