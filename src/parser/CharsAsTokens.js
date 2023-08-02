import antlr4, * as runtime from 'runtime/antlr4/index.web.js';

/**
 * CharsAsTokens 类的定义：
 * https://github.com/parrt/mini-markdown/blob/master/src/org/antlr/md/CharsAsTokens.java
 * 
 * TokenSource 接口：
 * https://www.antlr.org/api/Java/org/antlr/v4/runtime/TokenSource.html
 */
export default class CharsAsTokens extends runtime.TokenSource {
    UNKNOWN;

    // CharStream
    input;

	// Map<String, Integer> 
    tokenTypeMap;

    // int 
    line=1;

    // int charPosInLine
    column;

    // Map<Integer, Integer> 
    charToTokenType = {};

    /**
     * 
     * @param {CharStream} input 
     * @param {Map<String, Integer>} Map 
     * @param {any} 
     * @param {*} String 
     * @param {*} Integer 
     */
    constructor(input,  tokenTypeMap) {
        super();
        this.input = input;
        this.tokenTypeMap = tokenTypeMap;
        let max_ttype = 0;
        for ( const tname of Object.keys(tokenTypeMap)) {
			const ttype = tokenTypeMap[tname];
            if ( tname!=null && tname.charAt(0)=='\'' ) {
				const charVal = Number.parseInt(tname);
				charToTokenType[charVal] = ttype;
            }
			max_ttype = Math.max(max_ttype, ttype);
        }
		UNKNOWN = max_ttype; // past end of real tokens
    }

    /**
     * 
     */
    getCharPositionInLine(){

    }

    getInputStream(){

    }

    getLine(){

    }

    getSourceName(){

    }

    getTokenFactory(){
        return runtime.CommonTokenFactory.DEFAULT;
    }


    nextToken(){

    }

    setTokenFactory(factory) {

    }
}