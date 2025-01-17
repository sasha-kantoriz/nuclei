

/**
 * SMTPClient is a minimal SMTP client for nuclei scripts.
 * @example
 * ```javascript
 * const smtp = require('nuclei/smtp');
 * const client = new smtp.Client();
 * ```
 */
export class SMTPClient {
    

    // Constructor of SMTPClient
    constructor() {}
    /**
    * IsSMTP checks if a host is running a SMTP server.
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const isSMTP = smtp.IsSMTP('acme.com', 25);
    * log(toJSON(isSMTP));
    * ```
    */
    public IsSMTP(host: string, port: number): IsSMTPResponse | null {
        return null;
    }
    

    /**
    * IsOpenRelay checks if a host is an open relay.
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const message = new smtp.SMTPMessage();
    * message.From('xyz@projectdiscovery.io');
    * message.To('xyz2@projectdiscoveyr.io');
    * message.Subject('hello');
    * message.Body('hello');
    * const isRelay = smtp.IsOpenRelay('acme.com', 25, message);
    * ```
    */
    public IsOpenRelay(host: string, port: number, msg: SMTPMessage): boolean | null {
        return null;
    }
    

    /**
    * SendMail sends an email using the SMTP protocol.
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const message = new smtp.SMTPMessage();
    * message.From('xyz@projectdiscovery.io');
    * message.To('xyz2@projectdiscoveyr.io');
    * message.Subject('hello');
    * message.Body('hello');
    * const isSent = smtp.SendMail('acme.com', 25, message);
    * ```
    */
    public SendMail(host: string, port: string, msg: SMTPMessage): boolean | null {
        return null;
    }
    

}



/**
 * SMTPMessage is a message to be sent over SMTP
 * @example
 * ```javascript
 * const smtp = require('nuclei/smtp');
 * const message = new smtp.SMTPMessage();
 * message.From('xyz@projectdiscovery.io');
 * ```
 */
export class SMTPMessage {
    

    // Constructor of SMTPMessage
    constructor() {}
    /**
    * From adds the from field to the message
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const message = new smtp.SMTPMessage();
    * message.From('xyz@projectdiscovery.io');
    * ```
    */
    public From(email: string): SMTPMessage {
        return this;
    }
    

    /**
    * To adds the to field to the message
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const message = new smtp.SMTPMessage();
    * message.To('xyz@projectdiscovery.io');
    * ```
    */
    public To(email: string): SMTPMessage {
        return this;
    }
    

    /**
    * Subject adds the subject field to the message
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const message = new smtp.SMTPMessage();
    * message.Subject('hello');
    * ```
    */
    public Subject(sub: string): SMTPMessage {
        return this;
    }
    

    /**
    * Body adds the message body to the message
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const message = new smtp.SMTPMessage();
    * message.Body('hello');
    * ```
    */
    public Body(msg: Uint8Array): SMTPMessage {
        return this;
    }
    

    /**
    * Auth when called authenticates using username and password before sending the message
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const message = new smtp.SMTPMessage();
    * message.Auth('username', 'password');
    * ```
    */
    public Auth(username: string): SMTPMessage {
        return this;
    }
    

    /**
    * String returns the string representation of the message
    * @example
    * ```javascript
    * const smtp = require('nuclei/smtp');
    * const message = new smtp.SMTPMessage();
    * message.From('xyz@projectdiscovery.io');
    * message.To('xyz2@projectdiscoveyr.io');
    * message.Subject('hello');
    * message.Body('hello');
    * log(message.String());
    * ```
    */
    public String(): string {
        return "";
    }
    

}



/**
 * IsSMTPResponse is the response from the IsSMTP function.
 * @example
 * ```javascript
 * const smtp = require('nuclei/smtp');
 * const isSMTP = smtp.IsSMTP('acme.com', 25);
 * log(toJSON(isSMTP));
 * ```
 */
export interface IsSMTPResponse {
    
    IsSMTP?: boolean,
    
    Banner?: string,
}

