/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the CredentialList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account that is responsible for this resource.
 * @param credentialListSid - The unique id that identifies the credential list that includes this credential
 */
declare function CredentialList(version: V2010, accountSid: string, credentialListSid: string): CredentialListInstance;

/**
 * Options to pass to update
 *
 * @property password - The password will not be returned in the response
 */
interface CredentialInstanceUpdateOptions {
  password?: string;
}

interface CredentialListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CredentialContext;
  /**
   * create a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CredentialListInstanceCreateOptions, callback?: (error: Error | null, item: CredentialInstance) => any): Promise<CredentialInstance>;
  /**
   * Streams CredentialInstance records from the API.
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
  each(opts?: CredentialListInstanceEachOptions, callback?: (item: CredentialInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a credential
   *
   * @param sid - The unique id that identifies the resource to fetch.
   */
  get(sid: string): CredentialContext;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CredentialListInstanceOptions, callback?: (error: Error | null, items: CredentialInstance[]) => any): Promise<CredentialInstance[]>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CredentialListInstancePageOptions, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property password - The password will not be returned in the response.
 * @property username - The username for this credential.
 */
interface CredentialListInstanceCreateOptions {
  password: string;
  username: string;
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
interface CredentialListInstanceEachOptions {
  callback?: (item: CredentialInstance, done: (err?: Error) => void) => void;
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
interface CredentialListInstanceOptions {
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
interface CredentialListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface CredentialPayload extends CredentialResource, Page.TwilioResponsePayload {
}

interface CredentialResource {
  account_sid: string;
  credential_list_sid: string;
  date_created: Date;
  date_updated: Date;
  sid: string;
  uri: string;
  username: string;
}

interface CredentialSolution {
  accountSid?: string;
  credentialListSid?: string;
}


declare class CredentialContext {
  /**
   * Initialize the CredentialContext
   *
   * @param version - Version of the resource
   * @param accountSid - The unique id of the Account that is responsible for this resource.
   * @param credentialListSid - The unique id that identifies the credential list that contains the desired credential
   * @param sid - The unique id that identifies the resource to fetch.
   */
  constructor(version: V2010, accountSid: string, credentialListSid: string, sid: string);

  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialInstance) => any): Promise<CredentialInstance>;
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CredentialInstanceUpdateOptions, callback?: (error: Error | null, items: CredentialInstance) => any): Promise<CredentialInstance>;
}


declare class CredentialInstance extends SerializableClass {
  /**
   * Initialize the CredentialContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account that is responsible for this resource.
   * @property credentialListSid - The unique id that identifies the credential list that includes this credential
   * @property username - The username for this credential.
   * @property dateCreated - The date that this resource was created, given as GMT in RFC 2822 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in RFC 2822 format.
   * @property uri - The URI for this resource, relative to https://api.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account that is responsible for this resource.
   * @param credentialListSid - The unique id that identifies the credential list that includes this credential
   * @param sid - The unique id that identifies the resource to fetch.
   */
  constructor(version: V2010, payload: CredentialPayload, accountSid: string, credentialListSid: string, sid: string);

  private _proxy: CredentialContext;
  accountSid: string;
  credentialListSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialInstance) => any): void;
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CredentialInstanceUpdateOptions, callback?: (error: Error | null, items: CredentialInstance) => any): void;
  uri: string;
  username: string;
}


declare class CredentialPage extends Page<V2010, CredentialPayload, CredentialResource, CredentialInstance> {
  /**
   * Initialize the CredentialPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: CredentialSolution);

  /**
   * Build an instance of CredentialInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialPayload): CredentialInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CredentialContext, CredentialInstance, CredentialList, CredentialListInstance, CredentialListInstanceCreateOptions, CredentialListInstanceEachOptions, CredentialListInstanceOptions, CredentialListInstancePageOptions, CredentialPage, CredentialPayload, CredentialResource, CredentialSolution }
