parser grammar KdsMarkdownParser;

options { language=JavaScript; tokenVocab=KdsMarkdownLexer; }

tokens {A,B,C}

a : ID ;
