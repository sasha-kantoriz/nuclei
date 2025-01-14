

/**
 * OracleClient is a minimal Oracle client for nuclei scripts.
 * @example
 * ```javascript
 * const oracle = require('nuclei/oracle');
 * const client = new oracle.Client();
 * ```
 */
export class OracleClient {
    

    // Constructor of OracleClient
    constructor() {}
    /**
    * IsOracle checks if a host is running an Oracle server
    * @example
    * ```javascript
    * const oracle = require('nuclei/oracle');
    * const isOracle = oracle.IsOracle('acme.com', 1521);
    * log(toJSON(isOracle));
    * ```
    */
    public IsOracle(host: string, port: number): IsOracleResponse | null {
        return null;
    }
    

}



/**
 * IsOracleResponse is the response from the IsOracle function.
 * this is returned by IsOracle function.
 * @example
 * ```javascript
 * const oracle = require('nuclei/oracle');
 * const isOracle = oracle.IsOracle('acme.com', 1521);
 * ```
 */
export interface IsOracleResponse {
    
    IsOracle?: boolean,
    
    Banner?: string,
}

