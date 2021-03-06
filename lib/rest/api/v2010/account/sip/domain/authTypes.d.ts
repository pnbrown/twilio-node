/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import V2010 = require('../../../../V2010');

/**
 * @description Initialize the AuthTypesList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 * @param domainSid - The unique string that identifies the resource
 */
declare function AuthTypesList(version: V2010, accountSid: string, domainSid: string): AuthTypesListInstance;

interface AuthTypesListInstance {
  calls?: object;
  registrations?: object;
}

interface AuthTypesPayload extends AuthTypesResource, Page.TwilioResponsePayload {
}

interface AuthTypesResource {
}

interface AuthTypesSolution {
  accountSid?: string;
  domainSid?: string;
}

export { AuthTypesList, AuthTypesListInstance, AuthTypesPayload, AuthTypesResource, AuthTypesSolution }
