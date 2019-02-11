/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

type AuthorizedConnectAppPermission = 'get-all'|'post-all';

/**
 * @description Initialize the AuthorizedConnectAppList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 */
declare function AuthorizedConnectAppList(version: V2010, accountSid: string): AuthorizedConnectAppListInstance;

interface AuthorizedConnectAppListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AuthorizedConnectAppContext;
  /**
   * Streams AuthorizedConnectAppInstance records from the API.
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
  each(opts?: AuthorizedConnectAppListInstanceEachOptions, callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a authorized_connect_app
   *
   * @param connectAppSid - The SID of the Connect App to fetch
   */
  get(connectAppSid: string): AuthorizedConnectAppContext;
  /**
   * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AuthorizedConnectAppListInstanceOptions, callback?: (error: Error | null, items: AuthorizedConnectAppInstance[]) => any): Promise<AuthorizedConnectAppInstance[]>;
  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AuthorizedConnectAppListInstancePageOptions, callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface AuthorizedConnectAppListInstanceEachOptions {
  callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface AuthorizedConnectAppListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface AuthorizedConnectAppListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AuthorizedConnectAppPayload extends AuthorizedConnectAppResource, Page.TwilioResponsePayload {
}

interface AuthorizedConnectAppResource {
  account_sid: string;
  connect_app_company_name: string;
  connect_app_description: string;
  connect_app_friendly_name: string;
  connect_app_homepage_url: string;
  connect_app_sid: string;
  date_created: Date;
  date_updated: Date;
  permissions: string;
  uri: string;
}

interface AuthorizedConnectAppSolution {
  accountSid?: string;
}


declare class AuthorizedConnectAppContext {
  /**
   * Initialize the AuthorizedConnectAppContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param connectAppSid - The SID of the Connect App to fetch
   */
  constructor(version: V2010, accountSid: string, connectAppSid: string);

  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthorizedConnectAppInstance) => any): Promise<AuthorizedConnectAppInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AuthorizedConnectAppInstance extends SerializableClass {
  /**
   * Initialize the AuthorizedConnectAppContext
   *
   * @property accountSid - The SID of the Account that created the resource
   * @property connectAppCompanyName - The company name set for the Connect App
   * @property connectAppDescription - A detailed description of the app
   * @property connectAppFriendlyName - The name of the Connect App
   * @property connectAppHomepageUrl - The public URL for the Connect App
   * @property connectAppSid - The SID that we assigned to the Connect App
   * @property dateCreated - The RFC 2822 date and time in GMT that the resource was created
   * @property dateUpdated - The RFC 2822 date and time in GMT that the resource was last updated
   * @property permissions - Permissions authorized to the app
   * @property uri - The URI of the resource, relative to `https://api.twilio.com`
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param connectAppSid - The SID of the Connect App to fetch
   */
  constructor(version: V2010, payload: AuthorizedConnectAppPayload, accountSid: string, connectAppSid: string);

  private _proxy: AuthorizedConnectAppContext;
  accountSid: string;
  connectAppCompanyName: string;
  connectAppDescription: string;
  connectAppFriendlyName: string;
  connectAppHomepageUrl: string;
  connectAppSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthorizedConnectAppInstance) => any): void;
  permissions: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uri: string;
}


declare class AuthorizedConnectAppPage extends Page<V2010, AuthorizedConnectAppPayload, AuthorizedConnectAppResource, AuthorizedConnectAppInstance> {
  /**
   * Initialize the AuthorizedConnectAppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AuthorizedConnectAppSolution);

  /**
   * Build an instance of AuthorizedConnectAppInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AuthorizedConnectAppPayload): AuthorizedConnectAppInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AuthorizedConnectAppContext, AuthorizedConnectAppInstance, AuthorizedConnectAppList, AuthorizedConnectAppListInstance, AuthorizedConnectAppListInstanceEachOptions, AuthorizedConnectAppListInstanceOptions, AuthorizedConnectAppListInstancePageOptions, AuthorizedConnectAppPage, AuthorizedConnectAppPayload, AuthorizedConnectAppResource, AuthorizedConnectAppSolution }
