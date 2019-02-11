/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type SubscribedTrackKind = 'audio'|'video'|'data';

type SubscribedTrackStatus = 'subscribe'|'unsubscribe';

/**
 * @description Initialize the SubscribedTrackList
 *
 * @param version - Version of the resource
 * @param roomSid - The room_sid
 * @param subscriberSid - The subscriber_sid
 */
declare function SubscribedTrackList(version: V1, roomSid: string, subscriberSid: string): SubscribedTrackListInstance;

interface SubscribedTrackListInstance {
  /**
   * Streams SubscribedTrackInstance records from the API.
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
  each(opts?: SubscribedTrackListInstanceEachOptions, callback?: (item: SubscribedTrackInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SubscribedTrackPage) => any): Promise<SubscribedTrackPage>;
  /**
   * Lists SubscribedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SubscribedTrackListInstanceOptions, callback?: (error: Error | null, items: SubscribedTrackInstance[]) => any): Promise<SubscribedTrackInstance[]>;
  /**
   * Retrieve a single page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SubscribedTrackListInstancePageOptions, callback?: (error: Error | null, items: SubscribedTrackPage) => any): Promise<SubscribedTrackPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SubscribedTrackInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SubscribedTrackListInstanceUpdateOptions, callback?: (error: Error | null, items: SubscribedTrackListInstance) => any): Promise<SubscribedTrackInstance>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreatedAfter - The date_created_after
 * @property dateCreatedBefore - The date_created_before
 * @property done - Function to be called upon completion of streaming
 * @property kind - The kind
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
 * @property publisher - The publisher
 * @property track - The track
 */
interface SubscribedTrackListInstanceEachOptions {
  callback?: (item: SubscribedTrackInstance, done: (err?: Error) => void) => void;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  kind?: SubscribedTrackKind;
  limit?: number;
  pageSize?: number;
  publisher?: string;
  track?: string;
}

/**
 * Options to pass to list
 *
 * @property dateCreatedAfter - The date_created_after
 * @property dateCreatedBefore - The date_created_before
 * @property kind - The kind
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
 * @property publisher - The publisher
 * @property track - The track
 */
interface SubscribedTrackListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  kind?: SubscribedTrackKind;
  limit?: number;
  pageSize?: number;
  publisher?: string;
  track?: string;
}

/**
 * Options to pass to page
 *
 * @property dateCreatedAfter - The date_created_after
 * @property dateCreatedBefore - The date_created_before
 * @property kind - The kind
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property publisher - The publisher
 * @property track - The track
 */
interface SubscribedTrackListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  kind?: SubscribedTrackKind;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  publisher?: string;
  track?: string;
}

/**
 * Options to pass to update
 *
 * @property kind - The kind
 * @property publisher - The publisher
 * @property status - The status
 * @property track - The track
 */
interface SubscribedTrackListInstanceUpdateOptions {
  kind?: SubscribedTrackKind;
  publisher?: string;
  status?: SubscribedTrackStatus;
  track?: string;
}

interface SubscribedTrackPayload extends SubscribedTrackResource, Page.TwilioResponsePayload {
}

interface SubscribedTrackResource {
  date_created: Date;
  date_updated: Date;
  enabled: boolean;
  kind: SubscribedTrackKind;
  name: string;
  publisher_sid: string;
  room_sid: string;
  sid: string;
  subscriber_sid: string;
}

interface SubscribedTrackSolution {
  roomSid?: string;
  subscriberSid?: string;
}


declare class SubscribedTrackInstance extends SerializableClass {
  /**
   * Initialize the SubscribedTrackContext
   *
   * @property sid - The sid
   * @property roomSid - The room_sid
   * @property name - The name
   * @property publisherSid - The publisher_sid
   * @property subscriberSid - The subscriber_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property enabled - The enabled
   * @property kind - The kind
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The room_sid
   * @param subscriberSid - The subscriber_sid
   */
  constructor(version: V1, payload: SubscribedTrackPayload, roomSid: string, subscriberSid: string);

  dateCreated: Date;
  dateUpdated: Date;
  enabled: boolean;
  kind: SubscribedTrackKind;
  name: string;
  publisherSid: string;
  roomSid: string;
  sid: string;
  subscriberSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class SubscribedTrackPage extends Page<V1, SubscribedTrackPayload, SubscribedTrackResource, SubscribedTrackInstance> {
  /**
   * Initialize the SubscribedTrackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SubscribedTrackSolution);

  /**
   * Build an instance of SubscribedTrackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SubscribedTrackPayload): SubscribedTrackInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SubscribedTrackInstance, SubscribedTrackList, SubscribedTrackListInstance, SubscribedTrackListInstanceEachOptions, SubscribedTrackListInstanceOptions, SubscribedTrackListInstancePageOptions, SubscribedTrackListInstanceUpdateOptions, SubscribedTrackPage, SubscribedTrackPayload, SubscribedTrackResource, SubscribedTrackSolution }
