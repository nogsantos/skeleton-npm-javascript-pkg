/**
 * Just an example
 *
 * @export
 * @class Example
 */
export class Example {
    /**
     * Do somthing
     *
     * @param {String} message
     * @returns {String}
     * @memberof Example
     */
    doSomething(message) {
        return `Hello ${message ? message : 'there'}!`;
    }
}
