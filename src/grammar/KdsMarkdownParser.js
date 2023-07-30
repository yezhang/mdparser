// Generated from src/grammar/KdsMarkdownParser.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import KdsMarkdownParserListener from './KdsMarkdownParserListener.js';
const serializedATN = [4,1,4,5,2,0,7,0,1,0,1,0,1,0,0,0,1,0,0,0,3,0,2,1,0,
0,0,2,3,5,1,0,0,3,1,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class KdsMarkdownParser extends antlr4.Parser {

    static grammarFileName = "KdsMarkdownParser.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "ID", "A", "B", "C" ];
    static ruleNames = [ "a" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = KdsMarkdownParser.ruleNames;
        this.literalNames = KdsMarkdownParser.literalNames;
        this.symbolicNames = KdsMarkdownParser.symbolicNames;
    }



	a() {
	    let localctx = new AContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, KdsMarkdownParser.RULE_a);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 2;
	        this.match(KdsMarkdownParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

KdsMarkdownParser.EOF = antlr4.Token.EOF;
KdsMarkdownParser.ID = 1;
KdsMarkdownParser.A = 2;
KdsMarkdownParser.B = 3;
KdsMarkdownParser.C = 4;

KdsMarkdownParser.RULE_a = 0;

class AContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_a;
    }

	ID() {
	    return this.getToken(KdsMarkdownParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownParserListener ) {
	        listener.enterA(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownParserListener ) {
	        listener.exitA(this);
		}
	}


}




KdsMarkdownParser.AContext = AContext; 
