// Generated from src/grammar/KdsMarkdown.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import KdsMarkdownListener from './KdsMarkdownListener.js';
const serializedATN = [4,1,126,177,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,5,0,36,8,0,10,0,12,0,39,9,0,
1,0,4,0,42,8,0,11,0,12,0,43,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,53,8,1,1,2,4,
2,56,8,2,11,2,12,2,57,1,2,5,2,61,8,2,10,2,12,2,64,9,2,1,2,1,2,1,3,5,3,69,
8,3,10,3,12,3,72,9,3,1,3,1,3,1,3,1,3,3,3,78,8,3,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,4,4,88,8,4,11,4,12,4,89,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,
1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,116,8,9,10,9,
12,9,119,9,9,1,9,1,9,1,10,4,10,124,8,10,11,10,12,10,125,1,10,1,10,1,11,1,
11,1,11,5,11,133,8,11,10,11,12,11,136,9,11,1,11,1,11,1,12,4,12,141,8,12,
11,12,12,12,142,1,12,1,12,1,12,1,13,1,13,1,13,1,13,3,13,152,8,13,3,13,154,
8,13,3,13,156,8,13,1,13,1,13,1,13,1,13,1,14,4,14,163,8,14,11,14,12,14,164,
1,15,4,15,168,8,15,11,15,12,15,169,1,16,3,16,173,8,16,1,16,1,16,1,16,0,0,
17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,5,1,0,1,1,2,0,1,1,4,4,
1,0,9,9,3,0,1,3,5,7,10,10,2,0,4,4,11,11,186,0,37,1,0,0,0,2,52,1,0,0,0,4,
55,1,0,0,0,6,70,1,0,0,0,8,87,1,0,0,0,10,91,1,0,0,0,12,96,1,0,0,0,14,101,
1,0,0,0,16,105,1,0,0,0,18,110,1,0,0,0,20,123,1,0,0,0,22,129,1,0,0,0,24,140,
1,0,0,0,26,147,1,0,0,0,28,162,1,0,0,0,30,167,1,0,0,0,32,172,1,0,0,0,34,36,
5,1,0,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,41,1,
0,0,0,39,37,1,0,0,0,40,42,3,2,1,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,0,
0,0,43,44,1,0,0,0,44,45,1,0,0,0,45,46,5,0,0,1,46,1,1,0,0,0,47,53,3,4,2,0,
48,53,3,6,3,0,49,53,3,20,10,0,50,53,3,24,12,0,51,53,5,1,0,0,52,47,1,0,0,
0,52,48,1,0,0,0,52,49,1,0,0,0,52,50,1,0,0,0,52,51,1,0,0,0,53,3,1,0,0,0,54,
56,5,2,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,62,
1,0,0,0,59,61,8,0,0,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,
0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,65,66,5,1,0,0,66,5,1,0,0,0,67,69,5,1,0,
0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,
72,70,1,0,0,0,73,74,3,8,4,0,74,77,5,1,0,0,75,78,3,32,16,0,76,78,5,0,0,1,
77,75,1,0,0,0,77,76,1,0,0,0,78,7,1,0,0,0,79,88,3,28,14,0,80,88,3,10,5,0,
81,88,3,16,8,0,82,88,3,18,9,0,83,88,3,12,6,0,84,88,3,14,7,0,85,86,4,4,0,
0,86,88,5,1,0,0,87,79,1,0,0,0,87,80,1,0,0,0,87,81,1,0,0,0,87,82,1,0,0,0,
87,83,1,0,0,0,87,84,1,0,0,0,87,85,1,0,0,0,88,89,1,0,0,0,89,87,1,0,0,0,89,
90,1,0,0,0,90,9,1,0,0,0,91,92,5,3,0,0,92,93,8,1,0,0,93,94,3,28,14,0,94,95,
5,3,0,0,95,11,1,0,0,0,96,97,4,6,1,0,97,98,3,30,15,0,98,99,5,3,0,0,99,100,
3,30,15,0,100,13,1,0,0,0,101,102,3,30,15,0,102,103,5,5,0,0,103,104,3,30,
15,0,104,15,1,0,0,0,105,106,5,5,0,0,106,107,8,1,0,0,107,108,3,28,14,0,108,
109,5,5,0,0,109,17,1,0,0,0,110,111,5,6,0,0,111,112,3,28,14,0,112,113,5,7,
0,0,113,117,5,8,0,0,114,116,8,2,0,0,115,114,1,0,0,0,116,119,1,0,0,0,117,
115,1,0,0,0,117,118,1,0,0,0,118,120,1,0,0,0,119,117,1,0,0,0,120,121,5,9,
0,0,121,19,1,0,0,0,122,124,3,22,11,0,123,122,1,0,0,0,124,125,1,0,0,0,125,
123,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,128,3,32,16,0,128,21,1,0,
0,0,129,130,4,11,2,0,130,134,5,10,0,0,131,133,8,0,0,0,132,131,1,0,0,0,133,
136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,134,1,0,
0,0,137,138,5,1,0,0,138,23,1,0,0,0,139,141,3,26,13,0,140,139,1,0,0,0,141,
142,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,3,32,
16,0,145,146,3,32,16,0,146,25,1,0,0,0,147,155,4,13,3,0,148,153,5,4,0,0,149,
151,5,4,0,0,150,152,5,4,0,0,151,150,1,0,0,0,151,152,1,0,0,0,152,154,1,0,
0,0,153,149,1,0,0,0,153,154,1,0,0,0,154,156,1,0,0,0,155,148,1,0,0,0,155,
156,1,0,0,0,156,157,1,0,0,0,157,158,5,3,0,0,158,159,3,30,15,0,159,160,3,
8,4,0,160,27,1,0,0,0,161,163,8,3,0,0,162,161,1,0,0,0,163,164,1,0,0,0,164,
162,1,0,0,0,164,165,1,0,0,0,165,29,1,0,0,0,166,168,7,4,0,0,167,166,1,0,0,
0,168,169,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,31,1,0,0,0,171,173,
5,12,0,0,172,171,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,5,1,0,0,
175,33,1,0,0,0,19,37,43,52,57,62,70,77,87,89,117,125,134,142,151,153,155,
164,169,172];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class KdsMarkdownParser extends antlr4.Parser {

    static grammarFileName = "KdsMarkdown.g4";
    static literalNames = [ null, "'\\n'", "'#'", "'*'", "' '", "'_'", "'['", 
                            "']'", "'('", "')'", "'>'", "'\\t'", "'\\r'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'!'", "'\"'", null, 
                            "'$'", "'%'", "'&'", "'''", null, null, null, 
                            "'+'", "','", "'-'", "'.'", "'/'", "'0'", "'1'", 
                            "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", "'8'", 
                            "'9'", "':'", "';'", "'<'", "'='", null, "'?'", 
                            "'@'", "'A'", "'B'", "'C'", "'D'", "'E'", "'F'", 
                            "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", "'M'", 
                            "'N'", "'O'", "'P'", "'Q'", "'R'", "'S'", "'T'", 
                            "'U'", "'V'", "'W'", "'X'", "'Y'", "'Z'", null, 
                            "'\\'", null, "'^'", null, "'`'", "'a'", "'b'", 
                            "'c'", "'d'", "'e'", "'f'", "'g'", "'h'", "'i'", 
                            "'j'", "'k'", "'l'", "'m'", "'n'", "'o'", "'p'", 
                            "'q'", "'r'", "'s'", "'t'", "'u'", "'v'", "'w'", 
                            "'x'", "'y'", "'z'", "'{'", "'|'", "'}'", "'~'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "'!'", "'\"'", null, "'$'", "'%'", "'&'", 
                             "'''", null, null, null, "'+'", "','", "'-'", 
                             "'.'", "'/'", "'0'", "'1'", "'2'", "'3'", "'4'", 
                             "'5'", "'6'", "'7'", "'8'", "'9'", "':'", "';'", 
                             "'<'", "'='", null, "'?'", "'@'", "'A'", "'B'", 
                             "'C'", "'D'", "'E'", "'F'", "'G'", "'H'", "'I'", 
                             "'J'", "'K'", "'L'", "'M'", "'N'", "'O'", "'P'", 
                             "'Q'", "'R'", "'S'", "'T'", "'U'", "'V'", "'W'", 
                             "'X'", "'Y'", "'Z'", null, "'\\'", null, "'^'", 
                             null, "'`'", "'a'", "'b'", "'c'", "'d'", "'e'", 
                             "'f'", "'g'", "'h'", "'i'", "'j'", "'k'", "'l'", 
                             "'m'", "'n'", "'o'", "'p'", "'q'", "'r'", "'s'", 
                             "'t'", "'u'", "'v'", "'w'", "'x'", "'y'", "'z'", 
                             "'{'", "'|'", "'}'", "'~'" ];
    static ruleNames = [ "file", "elem", "header", "para", "paraContent", 
                         "bold", "astericks", "underscore", "italics", "link", 
                         "quote", "quoteElem", "list", "listElem", "text", 
                         "ws", "nl" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = KdsMarkdownParser.ruleNames;
        this.literalNames = KdsMarkdownParser.literalNames;
        this.symbolicNames = KdsMarkdownParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.paraContent_sempred(localctx, predIndex);
    	case 6:
    	    		return this.astericks_sempred(localctx, predIndex);
    	case 11:
    	    		return this.quoteElem_sempred(localctx, predIndex);
    	case 13:
    	    		return this.listElem_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    paraContent_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return _input.LA(2)!='\n'&&_input.LA(2)!=Token.EOF;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    astericks_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return _input.LT(1).column!=0;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    quoteElem_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return _input.LT(1).column==0;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    listElem_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return _input.LT(1).column==0;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, KdsMarkdownParser.RULE_file);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 34;
	                this.match(KdsMarkdownParser.T__0); 
	            }
	            this.state = 39;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 41; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 40;
	        		this.elem();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 43; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 45;
	        this.match(KdsMarkdownParser.EOF);
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



	elem() {
	    let localctx = new ElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, KdsMarkdownParser.RULE_elem);
	    console.error(_input.LT(1));
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.header();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.para();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.quote();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.list();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 51;
	            this.match(KdsMarkdownParser.T__0);
	            break;

	        }
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



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, KdsMarkdownParser.RULE_header);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 54;
	        		this.match(KdsMarkdownParser.T__1);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 57; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 2147483647) !== 0)) {
	            this.state = 59;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===1) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
	        this.match(KdsMarkdownParser.T__0);
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



	para() {
	    let localctx = new ParaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, KdsMarkdownParser.RULE_para);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 67;
	                this.match(KdsMarkdownParser.T__0); 
	            }
	            this.state = 72;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	        this.state = 73;
	        this.paraContent();
	        this.state = 74;
	        this.match(KdsMarkdownParser.T__0);
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 12:
	            this.state = 75;
	            this.nl();
	            break;
	        case -1:
	            this.state = 76;
	            this.match(KdsMarkdownParser.EOF);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
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



	paraContent() {
	    let localctx = new ParaContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, KdsMarkdownParser.RULE_paraContent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 87;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 79;
	        		    this.text();
	        		    break;

	        		case 2:
	        		    this.state = 80;
	        		    this.bold();
	        		    break;

	        		case 3:
	        		    this.state = 81;
	        		    this.italics();
	        		    break;

	        		case 4:
	        		    this.state = 82;
	        		    this.link();
	        		    break;

	        		case 5:
	        		    this.state = 83;
	        		    this.astericks();
	        		    break;

	        		case 6:
	        		    this.state = 84;
	        		    this.underscore();
	        		    break;

	        		case 7:
	        		    this.state = 85;
	        		    if (!( _input.LA(2)!='\n'&&_input.LA(2)!=Token.EOF)) {
	        		        throw new antlr4.error.FailedPredicateException(this, "_input.LA(2)!='\\n'&&_input.LA(2)!=Token.EOF");
	        		    }
	        		    this.state = 86;
	        		    this.match(KdsMarkdownParser.T__0);
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 89; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	bold() {
	    let localctx = new BoldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, KdsMarkdownParser.RULE_bold);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(KdsMarkdownParser.T__2);
	        this.state = 92;
	        _la = this._input.LA(1);
	        if(_la<=0 || _la===1 || _la===4) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 93;
	        this.text();
	        this.state = 94;
	        this.match(KdsMarkdownParser.T__2);
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



	astericks() {
	    let localctx = new AstericksContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, KdsMarkdownParser.RULE_astericks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        if (!( _input.LT(1).column!=0)) {
	            throw new antlr4.error.FailedPredicateException(this, "_input.LT(1).column!=0");
	        }
	        this.state = 97;
	        this.ws();
	        this.state = 98;
	        this.match(KdsMarkdownParser.T__2);
	        this.state = 99;
	        this.ws();
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



	underscore() {
	    let localctx = new UnderscoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, KdsMarkdownParser.RULE_underscore);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.ws();
	        this.state = 102;
	        this.match(KdsMarkdownParser.T__4);
	        this.state = 103;
	        this.ws();
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



	italics() {
	    let localctx = new ItalicsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, KdsMarkdownParser.RULE_italics);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(KdsMarkdownParser.T__4);
	        this.state = 106;
	        _la = this._input.LA(1);
	        if(_la<=0 || _la===1 || _la===4) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 107;
	        this.text();
	        this.state = 108;
	        this.match(KdsMarkdownParser.T__4);
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



	link() {
	    let localctx = new LinkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, KdsMarkdownParser.RULE_link);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(KdsMarkdownParser.T__5);
	        this.state = 111;
	        this.text();
	        this.state = 112;
	        this.match(KdsMarkdownParser.T__6);
	        this.state = 113;
	        this.match(KdsMarkdownParser.T__7);
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294966782) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 2147483647) !== 0)) {
	            this.state = 114;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===9) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 120;
	        this.match(KdsMarkdownParser.T__8);
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



	quote() {
	    let localctx = new QuoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, KdsMarkdownParser.RULE_quote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 122;
	        		this.quoteElem();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 125; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 127;
	        this.nl();
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



	quoteElem() {
	    let localctx = new QuoteElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, KdsMarkdownParser.RULE_quoteElem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        if (!( _input.LT(1).column==0)) {
	            throw new antlr4.error.FailedPredicateException(this, "_input.LT(1).column==0");
	        }
	        this.state = 130;
	        this.match(KdsMarkdownParser.T__9);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 2147483647) !== 0)) {
	            this.state = 131;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===1) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this.match(KdsMarkdownParser.T__0);
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, KdsMarkdownParser.RULE_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 139;
	        		this.listElem();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 142; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 144;
	        this.nl();
	        this.state = 145;
	        this.nl();
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



	listElem() {
	    let localctx = new ListElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, KdsMarkdownParser.RULE_listElem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        if (!( _input.LT(1).column==0)) {
	            throw new antlr4.error.FailedPredicateException(this, "_input.LT(1).column==0");
	        }
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 148;
	            this.match(KdsMarkdownParser.T__3);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 149;
	                this.match(KdsMarkdownParser.T__3);
	                this.state = 151;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===4) {
	                    this.state = 150;
	                    this.match(KdsMarkdownParser.T__3);
	                }

	            }

	        }

	        this.state = 157;
	        this.match(KdsMarkdownParser.T__2);
	        this.state = 158;
	        this.ws();
	        this.state = 159;
	        this.paraContent();
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



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, KdsMarkdownParser.RULE_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 161;
	        		_la = this._input.LA(1);
	        		if(_la<=0 || (((_la) & ~0x1f) === 0 && ((1 << _la) & 1262) !== 0)) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 164; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	ws() {
	    let localctx = new WsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, KdsMarkdownParser.RULE_ws);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 166;
	        		_la = this._input.LA(1);
	        		if(!(_la===4 || _la===11)) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 169; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,17, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	nl() {
	    let localctx = new NlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, KdsMarkdownParser.RULE_nl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 171;
	            this.match(KdsMarkdownParser.T__11);
	        }

	        this.state = 174;
	        this.match(KdsMarkdownParser.T__0);
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
KdsMarkdownParser.T__0 = 1;
KdsMarkdownParser.T__1 = 2;
KdsMarkdownParser.T__2 = 3;
KdsMarkdownParser.T__3 = 4;
KdsMarkdownParser.T__4 = 5;
KdsMarkdownParser.T__5 = 6;
KdsMarkdownParser.T__6 = 7;
KdsMarkdownParser.T__7 = 8;
KdsMarkdownParser.T__8 = 9;
KdsMarkdownParser.T__9 = 10;
KdsMarkdownParser.T__10 = 11;
KdsMarkdownParser.T__11 = 12;

KdsMarkdownParser.RULE_file = 0;
KdsMarkdownParser.RULE_elem = 1;
KdsMarkdownParser.RULE_header = 2;
KdsMarkdownParser.RULE_para = 3;
KdsMarkdownParser.RULE_paraContent = 4;
KdsMarkdownParser.RULE_bold = 5;
KdsMarkdownParser.RULE_astericks = 6;
KdsMarkdownParser.RULE_underscore = 7;
KdsMarkdownParser.RULE_italics = 8;
KdsMarkdownParser.RULE_link = 9;
KdsMarkdownParser.RULE_quote = 10;
KdsMarkdownParser.RULE_quoteElem = 11;
KdsMarkdownParser.RULE_list = 12;
KdsMarkdownParser.RULE_listElem = 13;
KdsMarkdownParser.RULE_text = 14;
KdsMarkdownParser.RULE_ws = 15;
KdsMarkdownParser.RULE_nl = 16;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_file;
    }

	EOF() {
	    return this.getToken(KdsMarkdownParser.EOF, 0);
	};

	elem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElemContext);
	    } else {
	        return this.getTypedRuleContext(ElemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitFile(this);
		}
	}


}



class ElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_elem;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	para() {
	    return this.getTypedRuleContext(ParaContext,0);
	};

	quote() {
	    return this.getTypedRuleContext(QuoteContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitElem(this);
		}
	}


}



class HeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_header;
    }


	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitHeader(this);
		}
	}


}



class ParaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_para;
    }

	paraContent() {
	    return this.getTypedRuleContext(ParaContentContext,0);
	};

	nl() {
	    return this.getTypedRuleContext(NlContext,0);
	};

	EOF() {
	    return this.getToken(KdsMarkdownParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterPara(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitPara(this);
		}
	}


}



class ParaContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_paraContent;
    }

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	bold = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BoldContext);
	    } else {
	        return this.getTypedRuleContext(BoldContext,i);
	    }
	};

	italics = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItalicsContext);
	    } else {
	        return this.getTypedRuleContext(ItalicsContext,i);
	    }
	};

	link = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LinkContext);
	    } else {
	        return this.getTypedRuleContext(LinkContext,i);
	    }
	};

	astericks = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AstericksContext);
	    } else {
	        return this.getTypedRuleContext(AstericksContext,i);
	    }
	};

	underscore = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnderscoreContext);
	    } else {
	        return this.getTypedRuleContext(UnderscoreContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterParaContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitParaContent(this);
		}
	}


}



class BoldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_bold;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterBold(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitBold(this);
		}
	}


}



class AstericksContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_astericks;
    }

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterAstericks(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitAstericks(this);
		}
	}


}



class UnderscoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_underscore;
    }

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterUnderscore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitUnderscore(this);
		}
	}


}



class ItalicsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_italics;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterItalics(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitItalics(this);
		}
	}


}



class LinkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_link;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterLink(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitLink(this);
		}
	}


}



class QuoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_quote;
    }

	nl() {
	    return this.getTypedRuleContext(NlContext,0);
	};

	quoteElem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QuoteElemContext);
	    } else {
	        return this.getTypedRuleContext(QuoteElemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterQuote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitQuote(this);
		}
	}


}



class QuoteElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_quoteElem;
    }


	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterQuoteElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitQuoteElem(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_list;
    }

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	listElem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListElemContext);
	    } else {
	        return this.getTypedRuleContext(ListElemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitList(this);
		}
	}


}



class ListElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_listElem;
    }

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	paraContent() {
	    return this.getTypedRuleContext(ParaContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterListElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitListElem(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_text;
    }


	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitText(this);
		}
	}


}



class WsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_ws;
    }


	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterWs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitWs(this);
		}
	}


}



class NlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KdsMarkdownParser.RULE_nl;
    }


	enterRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.enterNl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof KdsMarkdownListener ) {
	        listener.exitNl(this);
		}
	}


}




KdsMarkdownParser.FileContext = FileContext; 
KdsMarkdownParser.ElemContext = ElemContext; 
KdsMarkdownParser.HeaderContext = HeaderContext; 
KdsMarkdownParser.ParaContext = ParaContext; 
KdsMarkdownParser.ParaContentContext = ParaContentContext; 
KdsMarkdownParser.BoldContext = BoldContext; 
KdsMarkdownParser.AstericksContext = AstericksContext; 
KdsMarkdownParser.UnderscoreContext = UnderscoreContext; 
KdsMarkdownParser.ItalicsContext = ItalicsContext; 
KdsMarkdownParser.LinkContext = LinkContext; 
KdsMarkdownParser.QuoteContext = QuoteContext; 
KdsMarkdownParser.QuoteElemContext = QuoteElemContext; 
KdsMarkdownParser.ListContext = ListContext; 
KdsMarkdownParser.ListElemContext = ListElemContext; 
KdsMarkdownParser.TextContext = TextContext; 
KdsMarkdownParser.WsContext = WsContext; 
KdsMarkdownParser.NlContext = NlContext; 
