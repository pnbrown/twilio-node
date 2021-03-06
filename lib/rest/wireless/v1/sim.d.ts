/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { DataSessionList } from './sim/dataSession';
import { DataSessionListInstance } from './sim/dataSession';
import { SerializableClass } from '../../../interfaces';
import { UsageRecordList } from './sim/usageRecord';
import { UsageRecordListInstance } from './sim/usageRecord';

type SimStatus = 'new'|'ready'|'active'|'suspended'|'deactivated'|'canceled'|'scheduled'|'updating';

/**
 * @description Initialize the SimList
 *
 * @param version - Version of the resource
 */
declare function SimList(version: V1): SimListInstance;

/**
 * Options to pass to update
 *
 * @property callbackMethod - The HTTP method Twilio will use when making a request to the callback URL.
 * @property callbackUrl - Twilio will make a request to this URL when the Sim has finished updating.
 * @property commandsCallbackMethod - A string representing the HTTP method to use when making a request to CommandsCallbackUrl.
 * @property commandsCallbackUrl - The URL that will receive a webhook when this Sim originates a Command.
 * @property friendlyName - A user-provided string that identifies this resource.
 * @property ratePlan - The Sid or UniqueName of the RatePlan that this Sim should use.
 * @property smsFallbackMethod - The HTTP method Twilio will use when requesting the sms_fallback_url.
 * @property smsFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by sms_url.
 * @property smsMethod - The HTTP method Twilio will use when requesting the above Url.
 * @property smsUrl - The URL Twilio will request when the SIM-connected device sends an SMS message that is not a Command.
 * @property status - A string representing the status of the Sim.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the Sid.
 * @property voiceFallbackMethod - The HTTP method Twilio will use when requesting the voice_fallback_url.
 * @property voiceFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by voice_url.
 * @property voiceMethod - The HTTP method Twilio will use when requesting the above Url.
 * @property voiceUrl - The URL Twilio will request when the SIM-connected device makes a call.
 */
interface SimInstanceUpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  commandsCallbackMethod?: string;
  commandsCallbackUrl?: string;
  friendlyName?: string;
  ratePlan?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  status?: SimStatus;
  uniqueName?: string;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

interface SimListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SimContext;
  /**
   * Streams SimInstance records from the API.
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
  each(opts?: SimListInstanceEachOptions, callback?: (item: SimInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sim
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): SimContext;
  /**
   * Retrieve a single target page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SimPage) => any): Promise<SimPage>;
  /**
   * Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SimListInstanceOptions, callback?: (error: Error | null, items: SimInstance[]) => any): Promise<SimInstance[]>;
  /**
   * Retrieve a single page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SimListInstancePageOptions, callback?: (error: Error | null, items: SimPage) => any): Promise<SimPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property eId - Only return Sims with this EID.
 * @property iccid - Return Sims with this Iccid.
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
 * @property ratePlan - Only return Sims with this Rate Plan.
 * @property simRegistrationCode - Only return Sims with this registration code.
 * @property status - Only return Sims with this status.
 */
interface SimListInstanceEachOptions {
  callback?: (item: SimInstance, done: (err?: Error) => void) => void;
  done?: Function;
  eId?: string;
  iccid?: string;
  limit?: number;
  pageSize?: number;
  ratePlan?: string;
  simRegistrationCode?: string;
  status?: SimStatus;
}

/**
 * Options to pass to list
 *
 * @property eId - Only return Sims with this EID.
 * @property iccid - Return Sims with this Iccid.
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
 * @property ratePlan - Only return Sims with this Rate Plan.
 * @property simRegistrationCode - Only return Sims with this registration code.
 * @property status - Only return Sims with this status.
 */
interface SimListInstanceOptions {
  eId?: string;
  iccid?: string;
  limit?: number;
  pageSize?: number;
  ratePlan?: string;
  simRegistrationCode?: string;
  status?: SimStatus;
}

/**
 * Options to pass to page
 *
 * @property eId - Only return Sims with this EID.
 * @property iccid - Return Sims with this Iccid.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property ratePlan - Only return Sims with this Rate Plan.
 * @property simRegistrationCode - Only return Sims with this registration code.
 * @property status - Only return Sims with this status.
 */
interface SimListInstancePageOptions {
  eId?: string;
  iccid?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  ratePlan?: string;
  simRegistrationCode?: string;
  status?: SimStatus;
}

interface SimPayload extends SimResource, Page.TwilioResponsePayload {
}

interface SimResource {
  account_sid: string;
  commands_callback_method: string;
  commands_callback_url: string;
  date_created: Date;
  date_updated: Date;
  e_id: string;
  friendly_name: string;
  iccid: string;
  ip_address: string;
  links: string;
  rate_plan_sid: string;
  sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status: SimStatus;
  unique_name: string;
  url: string;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface SimSolution {
}


declare class SimContext {
  /**
   * Initialize the SimContext
   *
   * @property usageRecords - usageRecords resource
   * @property dataSessions - dataSessions resource
   *
   * @param version - Version of the resource
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, sid: string);

  dataSessions: DataSessionListInstance;
  /**
   * fetch a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SimInstance) => any): Promise<SimInstance>;
  /**
   * remove a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SimInstance) => any): void;
  /**
   * update a SimInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SimInstanceUpdateOptions, callback?: (error: Error | null, items: SimInstance) => any): Promise<SimInstance>;
  usageRecords: UsageRecordListInstance;
}


declare class SimInstance extends SerializableClass {
  /**
   * Initialize the SimContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid.
   * @property accountSid - The unique id of the Account that this Sim belongs to.
   * @property ratePlanSid - The unique ID of the Rate Plan configured for this Sim.
   * @property friendlyName - A user-provided string that identifies this resource.
   * @property iccid - The ICCID associated with the SIM.
   * @property eId - The e_id
   * @property status - A string representing the status of the Sim.
   * @property commandsCallbackUrl - The URL that will receive a webhook when this Sim originates a machine-to-machine Command.
   * @property commandsCallbackMethod - A string representing the HTTP method to use when making a request to commands_callback_url.
   * @property smsFallbackMethod - The HTTP method Twilio will use when requesting the sms_fallback_url.
   * @property smsFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by sms_url.
   * @property smsMethod - The HTTP method Twilio will use when requesting the above Url.
   * @property smsUrl - The URL Twilio will request when the SIM-connected device send an SMS that is not a Command.
   * @property voiceFallbackMethod - The HTTP method Twilio will use when requesting the voice_fallback_url.
   * @property voiceFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by voice_url.
   * @property voiceMethod - The HTTP method Twilio will use when requesting the above Url.
   * @property voiceUrl - The URL Twilio will request when the SIM-connected device makes a call.
   * @property dateCreated - The date that this resource was created, given as GMT in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in ISO 8601 format.
   * @property url - The URL for this resource.
   * @property links - Each Sim instance resource supports a few subresources, listed here for convenience.
   * @property ipAddress - The ip_address
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: SimPayload, sid: string);

  private _proxy: SimContext;
  accountSid: string;
  commandsCallbackMethod: string;
  commandsCallbackUrl: string;
  /**
   * Access the dataSessions
   */
  dataSessions(): DataSessionListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  eId: string;
  /**
   * fetch a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SimInstance) => any): void;
  friendlyName: string;
  iccid: string;
  ipAddress: string;
  links: string;
  ratePlanSid: string;
  /**
   * remove a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SimInstance) => any): void;
  sid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  status: SimStatus;
  /**
   * Produce a plain JSON object version of the SimInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a SimInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SimInstanceUpdateOptions, callback?: (error: Error | null, items: SimInstance) => any): void;
  url: string;
  /**
   * Access the usageRecords
   */
  usageRecords(): UsageRecordListInstance;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceUrl: string;
}


declare class SimPage extends Page<V1, SimPayload, SimResource, SimInstance> {
  /**
   * Initialize the SimPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SimSolution);

  /**
   * Build an instance of SimInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SimPayload): SimInstance;
}

export { SimContext, SimInstance, SimList, SimListInstance, SimListInstanceEachOptions, SimListInstanceOptions, SimListInstancePageOptions, SimPage, SimPayload, SimResource, SimSolution }
