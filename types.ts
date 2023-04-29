
export namespace PactFfi {
  /** /data/input/pact.h#L47 */
  export type ExpressionValueType = PactFfi.ExpressionValueTypeValue;

  /** /data/input/pact.h#L81 */
  export type GeneratorCategory = GeneratorCategoryValue;

  /** /data/input/pact.h#L95 */
  export type InteractionPart = PactFfi.InteractionPartValue;

  /** /data/input/pact.h#L110 */
  export type LevelFilter = PactFfi.LevelFilterValue;

  /** /data/input/pact.h#L148 */
  export type MatchingRuleCategory = PactFfi.MatchingRuleCategoryValue;

  /** /data/input/pact.h#L178 */
  export type PactSpecification = PactFfi.PactSpecificationValue;

  /** /data/input/pact.h#L183 */
  export type AsynchronousMessage = string;

  /** /data/input/pact.h#L188 */
  export type Consumer = string;

  /** /data/input/pact.h#L193 */
  export type Generator = GeneratorCategoryValue;

  /** /data/input/pact.h#L199 */
  export type GeneratorCategoryIterator = string;

  /** /data/input/pact.h#L204 */
  export type HttpRequest = string;

  /** /data/input/pact.h#L209 */
  export type HttpResponse = string;

  /** /data/input/pact.h#L214 */
  export type MatchingRule = string;

  /** /data/input/pact.h#L220 */
  export type MatchingRuleCategoryIterator = string;

  /** /data/input/pact.h#L225 */
  export type MatchingRuleDefinitionResult = string;

  /** /data/input/pact.h#L230 */
  export type MatchingRuleIterator = string;

  /** /data/input/pact.h#L262 */
  export type MatchingRuleResult = string;

  /** /data/input/pact.h#L267 */
  export type Message = string;

  /** /data/input/pact.h#L272 */
  export type MessageContents = string;

  /** /data/input/pact.h#L280 */
  export type MessageMetadataIterator = string;

  /** /data/input/pact.h#L287 */
  export type MessagePact = string;

  /** /data/input/pact.h#L292 */
  export type MessagePactMessageIterator = string;

  /** /data/input/pact.h#L300 */
  export type MessagePactMetadataIterator = string;

  /** /data/input/pact.h#L305 */
  export type Mismatch = string;

  /** /data/input/pact.h#L310 */
  export type Mismatches = string;

  /** /data/input/pact.h#L315 */
  export type MismatchesIterator = string;

  /** /data/input/pact.h#L320 */
  export type Pact = string;

  /** /data/input/pact.h#L325 */
  export type PactInteraction = string;

  /** /data/input/pact.h#L330 */
  export type PactInteractionIterator = string;

  /** /data/input/pact.h#L335 */
  export type PactMessageIterator = string;

  /** /data/input/pact.h#L340 */
  export type PactSyncHttpIterator = string;

  /** /data/input/pact.h#L345 */
  export type PactSyncMessageIterator = string;

  /** /data/input/pact.h#L350 */
  export type Provider = string;

  /** /data/input/pact.h#L355 */
  export type ProviderState = string;

  /** /data/input/pact.h#L360 */
  export type ProviderStateIterator = string;

  /** /data/input/pact.h#L368 */
  export type ProviderStateParamIterator = string;

  /** /data/input/pact.h#L373 */
  export type SynchronousHttp = string;

  /** /data/input/pact.h#L378 */
  export type SynchronousMessage = string;

  /** /data/input/pact.h#L383 */
  export type VerifierHandle = number;

  /** /data/input/pact.h#L397 */
  export type GeneratorKeyValuePair = string;

  /** /data/input/pact.h#L411 */
  export type MatchingRuleKeyValuePair = string;

  /** /data/input/pact.h#L425 */
  export type MessageMetadataPair = string;

  /** /data/input/pact.h#L443 */
  export type MessagePactMetadataTriple = string;

  /** /data/input/pact.h#L457 */
  export type ProviderStateParamPair = string;
  
  /** /data/input/pact.h#L462 */
  export type PactHandle = string;

  // /** /data/input/pact.h#L476 */
  export type StringResult_Tag = PactFfi.StringResult_TagValue;

  // /** /data/input/pact.h#L488 */
  export type StringResult = String;

  /** /data/input/pact.h#L493 */
  export type InteractionHandle = string;

  /** /data/input/pact.h#L498 */
  export type MessagePactHandle = string;

  /** /data/input/pact.h#L503 */
  export type MessageHandle = string;

  /** /data/input/pact.h#L22 */
  export enum ExpressionValueTypeValue {
    ExpressionValueType_Unknown = 0,
    ExpressionValueType_String = 1,
    ExpressionValueType_Number = 2,
    ExpressionValueType_Integer = 3,
    ExpressionValueType_Decimal = 4,
    ExpressionValueType_Boolean = 5,
  }

  /** /data/input/pact.h#L52 */
  export enum GeneratorCategoryValue {
    GeneratorCategory_METHOD = 0,
    GeneratorCategory_PATH = 1,
    GeneratorCategory_HEADER = 2,
    GeneratorCategory_QUERY = 3,
    GeneratorCategory_BODY = 4,
    GeneratorCategory_STATUS = 5,
    GeneratorCategory_METADATA = 6,
  }

  /** /data/input/pact.h#L86 */
  export enum InteractionPartValue {
    InteractionPart_Request = 0,
    InteractionPart_Response = 1,
  }

  /** /data/input/pact.h#L103 */
  export enum LevelFilterValue {
    LevelFilter_Off = 0,
    LevelFilter_Error = 1,
    LevelFilter_Warn = 2,
    LevelFilter_Info = 3,
    LevelFilter_Debug = 4,
    LevelFilter_Trace = 5,
  }

  /** /data/input/pact.h#L115 */
  export enum MatchingRuleCategoryValue {
    MatchingRuleCategory_METHOD = 0,
    MatchingRuleCategory_PATH = 1,
    MatchingRuleCategory_HEADER = 2,
    MatchingRuleCategory_QUERY = 3,
    MatchingRuleCategory_BODY = 4,
    MatchingRuleCategory_STATUS = 5,
    MatchingRuleCategory_CONTENTS = 6,
    MatchingRuleCategory_METADATA = 7,
  }

  /** /data/input/pact.h#L153 */
  export enum PactSpecificationValue {
    PactSpecification_Unknown = 0,
    PactSpecification_V1 = 1,
    PactSpecification_V1_1 = 2,
    PactSpecification_V2 = 3,
    PactSpecification_V3 = 4,
    PactSpecification_V4 = 5,
  }

  /** /data/input/pact.h#L467 */
  export enum StringResult_TagValue {
    StringResult_Ok = 0,
    StringResult_Failed = 1,
  }

    /** /data/input/pact.h#L508 */
    export declare function version(): string;

    /** /data/input/pact.h#L519 */
    export declare function init(log_env_var: string): void;
  
    /** /data/input/pact.h#L529 */
    export declare function initWithLogLevel(level: string): void;
  
    /** /data/input/pact.h#L538 */
    export declare function enableAnsiSupport(): void;
  
    /** /data/input/pact.h#L553 */
    export declare function logMessage(source: string, log_level: string, message: string): void;
  
    /** /data/input/pact.h#L559 */
    export declare function matchMessage(msg_1: Message, msg_2: Message): Mismatches;
  
    /** /data/input/pact.h#L565 */
    export declare function mismatchesGetIter(mismatches: Mismatches): MismatchesIterator;
  
    /** /data/input/pact.h#L570 */
    export declare function mismatchesDelete(mismatches: Mismatches): void;
  
    /** /data/input/pact.h#L577 */
    export declare function mismatchesIterNext(iter: MismatchesIterator): Mismatch;
  
    /** /data/input/pact.h#L582 */
    export declare function mismatchesIterDelete(iter: MismatchesIterator): void;
  
    /** /data/input/pact.h#L587 */
    export declare function mismatchToJson(mismatch: Mismatch): string;
  
    /** /data/input/pact.h#L592 */
    export declare function mismatchType(mismatch: Mismatch): string;
  
    /** /data/input/pact.h#L597 */
    export declare function mismatchSummary(mismatch: Mismatch): string;
  
    /** /data/input/pact.h#L602 */
    export declare function mismatchDescription(mismatch: Mismatch): string;
  
    /** /data/input/pact.h#L607 */
    export declare function mismatchAnsiDescription(mismatch: Mismatch): string;
  
    /** /data/input/pact.h#L646 */
    export declare function getErrorMessage(buffer: string, length: string): string;
  
    /** /data/input/pact.h#L652 */
    export declare function logToStdout(level_filter: PactFfi.LevelFilter): string;
  
    /** /data/input/pact.h#L657 */
    export declare function logToStderr(level_filter: PactFfi.LevelFilter): string;
  
    /** /data/input/pact.h#L666 */
    export declare function logToFile(file_name: string, level_filter: PactFfi.LevelFilter): string;
  
    /** /data/input/pact.h#L671 */
    export declare function logToBuffer(level_filter: PactFfi.LevelFilter): string;
  
    /** /data/input/pact.h#L688 */
    export declare function loggerInit(): void;
  
    /** /data/input/pact.h#L725 */
    export declare function loggerAttachSink(sink_specifier: string, level_filter: PactFfi.LevelFilter): string;
  
    /** /data/input/pact.h#L735 */
    export declare function loggerApply(): string;
  
    /** /data/input/pact.h#L753 */
    export declare function fetchLogBuffer(log_id: string): string;
  
    /** /data/input/pact.h#L763 */
    export declare function parsePactJson(json: string): Pact;
  
    /** /data/input/pact.h#L768 */
    export declare function pactModelDelete(pact: Pact): void;
  
    /** /data/input/pact.h#L782 */
    export declare function pactModelInteractionIterator(pact: Pact): PactInteractionIterator;
  
    /** /data/input/pact.h#L787 */
    export declare function pactSpecVersion(pact: Pact): PactFfi.PactSpecification;
  
    /** /data/input/pact.h#L792 */
    export declare function pactInteractionDelete(interaction: PactInteraction): void;
  
    /** /data/input/pact.h#L805 */
    export declare function asyncMessageNew(): AsynchronousMessage;
  
    /** /data/input/pact.h#L810 */
    export declare function asyncMessageDelete(message: AsynchronousMessage): void;
  
    /** /data/input/pact.h#L824 */
    export declare function asyncMessageGetContents(message: AsynchronousMessage): MessageContents;
  
    /** /data/input/pact.h#L842 */
    export declare function asyncMessageGetContentsStr(message: AsynchronousMessage): string;
  
    /** /data/input/pact.h#L861 */
    export declare function asyncMessageSetContentsStr(message: AsynchronousMessage, contents: string, content_type: string): void;
  
    /** /data/input/pact.h#L877 */
    export declare function asyncMessageGetContentsLength(message: AsynchronousMessage): string;
  
    /** /data/input/pact.h#L893 */
    export declare function asyncMessageGetContentsBin(message: AsynchronousMessage): string;
  
    /** /data/input/pact.h#L913 */
    export declare function asyncMessageSetContentsBin(message: AsynchronousMessage, contents: string, len: string, content_type: string): void;
  
    /** /data/input/pact.h#L934 */
    export declare function asyncMessageGetDescription(message: AsynchronousMessage): string;
  
    /** /data/input/pact.h#L951 */
    export declare function asyncMessageSetDescription(message: AsynchronousMessage, description: string): string;
  
    /** /data/input/pact.h#L970 */
    export declare function asyncMessageGetProviderState(message: AsynchronousMessage, index: string): ProviderState;
  
    /** /data/input/pact.h#L984 */
    export declare function asyncMessageGetProviderStateIter(message: AsynchronousMessage): ProviderStateIterator;
  
    /** /data/input/pact.h#L1022 */
    export declare function consumerGetName(consumer: Consumer): string;
  
    /** /data/input/pact.h#L1033 */
    export declare function pactGetConsumer(pact: Pact): Consumer;
  
    /** /data/input/pact.h#L1038 */
    export declare function pactConsumerDelete(consumer: Consumer): void;
  
    /** /data/input/pact.h#L1056 */
    export declare function messageContentsGetContentsStr(contents: MessageContents): string;
  
    /** /data/input/pact.h#L1075 */
    export declare function messageContentsSetContentsStr(contents: MessageContents, contents_str: string, content_type: string): void;
  
    /** /data/input/pact.h#L1091 */
    export declare function messageContentsGetContentsLength(contents: MessageContents): string;
  
    /** /data/input/pact.h#L1107 */
    export declare function messageContentsGetContentsBin(contents: MessageContents): string;
  
    /** /data/input/pact.h#L1127 */
    export declare function messageContentsSetContentsBin(contents: MessageContents, contents_bin: string, len: string, content_type: string): void;
  
    /** /data/input/pact.h#L1153 */
    export declare function messageContentsGetMetadataIter(contents: MessageContents): MessageMetadataIterator;
  
    /** /data/input/pact.h#L1179 */
    export declare function messageContentsGetMatchingRuleIter(contents: MessageContents, category: PactFfi.MatchingRuleCategory): MatchingRuleCategoryIterator;
  
    /** /data/input/pact.h#L1203 */
    export declare function requestContentsGetMatchingRuleIter(request: HttpRequest, category: PactFfi.MatchingRuleCategory): MatchingRuleCategoryIterator;
  
    /** /data/input/pact.h#L1227 */
    export declare function responseContentsGetMatchingRuleIter(response: HttpResponse, category: PactFfi.MatchingRuleCategory): MatchingRuleCategoryIterator;
  
    /** /data/input/pact.h#L1245 */
    export declare function messageContentsGetGeneratorsIter(contents: MessageContents, category: PactFfi.GeneratorCategory): GeneratorCategoryIterator;
  
    /** /data/input/pact.h#L1263 */
    export declare function requestContentsGetGeneratorsIter(request: HttpRequest, category: PactFfi.GeneratorCategory): GeneratorCategoryIterator;
  
    /** /data/input/pact.h#L1281 */
    export declare function responseContentsGetGeneratorsIter(response: HttpResponse, category: PactFfi.GeneratorCategory): GeneratorCategoryIterator;
  
    /** /data/input/pact.h#L1305 */
    export declare function parseMatcherDefinition(expression: string): MatchingRuleDefinitionResult;
  
    /** /data/input/pact.h#L1312 */
    export declare function matcherDefinitionError(definition: MatchingRuleDefinitionResult): string;
  
    /** /data/input/pact.h#L1323 */
    export declare function matcherDefinitionValue(definition: MatchingRuleDefinitionResult): string;
  
    /** /data/input/pact.h#L1328 */
    export declare function matcherDefinitionDelete(definition: MatchingRuleDefinitionResult): void;
  
    /** /data/input/pact.h#L1339 */
    export declare function matcherDefinitionGenerator(definition: MatchingRuleDefinitionResult): Generator;
  
    /** /data/input/pact.h#L1345 */
    export declare function matcherDefinitionValueType(definition: MatchingRuleDefinitionResult): PactFfi.ExpressionValueType;
  
    /** /data/input/pact.h#L1350 */
    export declare function matchingRuleIterDelete(iter: MatchingRuleIterator): void;
  
    /** /data/input/pact.h#L1358 */
    export declare function matcherDefinitionIter(definition: MatchingRuleDefinitionResult): MatchingRuleIterator;
  
    /** /data/input/pact.h#L1375 */
    export declare function matchingRuleIterNext(iter: MatchingRuleIterator): MatchingRuleResult;
  
    /** /data/input/pact.h#L1412 */
    export declare function matchingRuleId(rule_result: MatchingRuleResult): string;
  
    /** /data/input/pact.h#L1453 */
    export declare function matchingRuleValue(rule_result: MatchingRuleResult): string;
  
    /** /data/input/pact.h#L1464 */
    export declare function matchingRulePointer(rule_result: MatchingRuleResult): MatchingRule;
  
    /** /data/input/pact.h#L1487 */
    export declare function matchingRuleReferenceName(rule_result: MatchingRuleResult): string;
  
    /** /data/input/pact.h#L1504 */
    export declare function validateDatetime(value: string, format: string): string;
  
    /** /data/input/pact.h#L1516 */
    export declare function generatorToJson(generator: Generator): string;
  
    /** /data/input/pact.h#L1526 */
    export declare function generatorGenerateString(generator: Generator, context_json: string): string;
  
    /** /data/input/pact.h#L1537 */
    export declare function generatorGenerateInteger(generator: Generator, context_json: string): string;
  
    /** /data/input/pact.h#L1543 */
    export declare function generatorsIterDelete(iter: GeneratorCategoryIterator): void;
  
    /** /data/input/pact.h#L1558 */
    export declare function generatorsIterNext(iter: GeneratorCategoryIterator): GeneratorKeyValuePair;
  
    /** /data/input/pact.h#L1563 */
    export declare function generatorsIterPairDelete(pair: GeneratorKeyValuePair): void;
  
    /** /data/input/pact.h#L1576 */
    export declare function syncHttpNew(): SynchronousHttp;
  
    /** /data/input/pact.h#L1581 */
    export declare function syncHttpDelete(interaction: SynchronousHttp): void;
  
    /** /data/input/pact.h#L1595 */
    export declare function syncHttpGetRequest(interaction: SynchronousHttp): HttpRequest;
  
    /** /data/input/pact.h#L1613 */
    export declare function syncHttpGetRequestContents(interaction: SynchronousHttp): string;
  
    /** /data/input/pact.h#L1632 */
    export declare function syncHttpSetRequestContents(interaction: SynchronousHttp, contents: string, content_type: string): void;
  
    /** /data/input/pact.h#L1648 */
    export declare function syncHttpGetRequestContentsLength(interaction: SynchronousHttp): string;
  
    /** /data/input/pact.h#L1664 */
    export declare function syncHttpGetRequestContentsBin(interaction: SynchronousHttp): string;
  
    /** /data/input/pact.h#L1684 */
    export declare function syncHttpSetRequestContentsBin(interaction: SynchronousHttp, contents: string, len: string, content_type: string): void;
  
    /** /data/input/pact.h#L1701 */
    export declare function syncHttpGetResponse(interaction: SynchronousHttp): HttpResponse;
  
    /** /data/input/pact.h#L1720 */
    export declare function syncHttpGetResponseContents(interaction: SynchronousHttp): string;
  
    /** /data/input/pact.h#L1739 */
    export declare function syncHttpSetResponseContents(interaction: SynchronousHttp, contents: string, content_type: string): void;
  
    /** /data/input/pact.h#L1755 */
    export declare function syncHttpGetResponseContentsLength(interaction: SynchronousHttp): string;
  
    /** /data/input/pact.h#L1771 */
    export declare function syncHttpGetResponseContentsBin(interaction: SynchronousHttp): string;
  
    /** /data/input/pact.h#L1791 */
    export declare function syncHttpSetResponseContentsBin(interaction: SynchronousHttp, contents: string, len: string, content_type: string): void;
  
    /** /data/input/pact.h#L1813 */
    export declare function syncHttpGetDescription(interaction: SynchronousHttp): string;
  
    /** /data/input/pact.h#L1830 */
    export declare function syncHttpSetDescription(interaction: SynchronousHttp, description: string): string;
  
    /** /data/input/pact.h#L1849 */
    export declare function syncHttpGetProviderState(interaction: SynchronousHttp, index: string): ProviderState;
  
    /** /data/input/pact.h#L1863 */
    export declare function syncHttpGetProviderStateIter(interaction: SynchronousHttp): ProviderStateIterator;
  
    /** /data/input/pact.h#L1877 */
    export declare function pactInteractionAsSynchronousHttp(interaction: PactInteraction): SynchronousHttp;
  
    /** /data/input/pact.h#L1894 */
    export declare function pactInteractionAsMessage(interaction: PactInteraction): Message;
  
    /** /data/input/pact.h#L1911 */
    export declare function pactInteractionAsAsynchronousMessage(interaction: PactInteraction): AsynchronousMessage;
  
    /** /data/input/pact.h#L1925 */
    export declare function pactInteractionAsSynchronousMessage(interaction: PactInteraction): SynchronousMessage;
  
    /** /data/input/pact.h#L1930 */
    export declare function pactMessageIterDelete(iter: PactMessageIterator): void;
  
    /** /data/input/pact.h#L1949 */
    export declare function pactMessageIterNext(iter: PactMessageIterator): Message;
  
    /** /data/input/pact.h#L1968 */
    export declare function pactSyncMessageIterNext(iter: PactSyncMessageIterator): SynchronousMessage;
  
    /** /data/input/pact.h#L1973 */
    export declare function pactSyncMessageIterDelete(iter: PactSyncMessageIterator): void;
  
    /** /data/input/pact.h#L1992 */
    export declare function pactSyncHttpIterNext(iter: PactSyncHttpIterator): SynchronousHttp;
  
    /** /data/input/pact.h#L1997 */
    export declare function pactSyncHttpIterDelete(iter: PactSyncHttpIterator): void;
  
    /** /data/input/pact.h#L2016 */
    export declare function pactInteractionIterNext(iter: PactInteractionIterator): PactInteraction;
  
    /** /data/input/pact.h#L2021 */
    export declare function pactInteractionIterDelete(iter: PactInteractionIterator): void;
  
    /** /data/input/pact.h#L2033 */
    export declare function matchingRuleToJson(rule: MatchingRule): string;
  
    /** /data/input/pact.h#L2038 */
    export declare function matchingRulesIterDelete(iter: MatchingRuleCategoryIterator): void;
  
    /** /data/input/pact.h#L2053 */
    export declare function matchingRulesIterNext(iter: MatchingRuleCategoryIterator): MatchingRuleKeyValuePair;
  
    /** /data/input/pact.h#L2058 */
    export declare function matchingRulesIterPairDelete(pair: MatchingRuleKeyValuePair): void;
  
    /** /data/input/pact.h#L2071 */
    export declare function messageNew(): Message;
  
    /** /data/input/pact.h#L2084 */
    export declare function messageNewFromJson(index: string, json_str: string, spec_version: PactFfi.PactSpecification): Message;
  
    /** /data/input/pact.h#L2099 */
    export declare function messageNewFromBody(body: string, content_type: string): Message;
  
    /** /data/input/pact.h#L2104 */
    export declare function messageDelete(message: Message): void;
  
    /** /data/input/pact.h#L2122 */
    export declare function messageGetContents(message: Message): string;
  
    /** /data/input/pact.h#L2137 */
    export declare function messageSetContents(message: Message, contents: string, content_type: string): void;
  
    /** /data/input/pact.h#L2153 */
    export declare function messageGetContentsLength(message: Message): string;
  
    /** /data/input/pact.h#L2169 */
    export declare function messageGetContentsBin(message: Message): string;
  
    /** /data/input/pact.h#L2184 */
    export declare function messageSetContentsBin(message: Message, contents: string, len: string, content_type: string): void;
  
    /** /data/input/pact.h#L2206 */
    export declare function messageGetDescription(message: Message): string;
  
    /** /data/input/pact.h#L2223 */
    export declare function messageSetDescription(message: Message, description: string): string;
  
    /** /data/input/pact.h#L2242 */
    export declare function messageGetProviderState(message: Message, index: string): ProviderState;
  
    /** /data/input/pact.h#L2256 */
    export declare function messageGetProviderStateIter(message: Message): ProviderStateIterator;
  
    /** /data/input/pact.h#L2272 */
    export declare function providerStateIterNext(iter: ProviderStateIterator): ProviderState;
  
    /** /data/input/pact.h#L2277 */
    export declare function providerStateIterDelete(iter: ProviderStateIterator): void;
  
    /** /data/input/pact.h#L2300 */
    export declare function messageFindMetadata(message: Message, key: string): string;
  
    /** /data/input/pact.h#L2316 */
    export declare function messageInsertMetadata(message: Message, key: string, value: string): string;
  
    /** /data/input/pact.h#L2331 */
    export declare function messageMetadataIterNext(iter: MessageMetadataIterator): MessageMetadataPair;
  
    /** /data/input/pact.h#L2351 */
    export declare function messageGetMetadataIter(message: Message): MessageMetadataIterator;
  
    /** /data/input/pact.h#L2356 */
    export declare function messageMetadataIterDelete(iter: MessageMetadataIterator): void;
  
    /** /data/input/pact.h#L2361 */
    export declare function messageMetadataPairDelete(pair: MessageMetadataPair): void;
  
    /** /data/input/pact.h#L2376 */
    export declare function messagePactNewFromJson(file_name: string, json_str: string): MessagePact;
  
    /** /data/input/pact.h#L2381 */
    export declare function messagePactDelete(message_pact: MessagePact): void;
  
    /** /data/input/pact.h#L2397 */
    export declare function messagePactGetConsumer(message_pact: MessagePact): Consumer;
  
    /** /data/input/pact.h#L2413 */
    export declare function messagePactGetProvider(message_pact: MessagePact): Provider;
  
    /** /data/input/pact.h#L2433 */
    export declare function messagePactGetMessageIter(message_pact: MessagePact): MessagePactMessageIterator;
  
    /** /data/input/pact.h#L2446 */
    export declare function messagePactMessageIterNext(iter: MessagePactMessageIterator): Message;
  
    /** /data/input/pact.h#L2451 */
    export declare function messagePactMessageIterDelete(iter: MessagePactMessageIterator): void;
  
    /** /data/input/pact.h#L2474 */
    export declare function messagePactFindMetadata(message_pact: MessagePact, key1: string, key2: string): string;
  
    /** /data/input/pact.h#L2496 */
    export declare function messagePactGetMetadataIter(message_pact: MessagePact): MessagePactMetadataIterator;
  
    /** /data/input/pact.h#L2509 */
    export declare function messagePactMetadataIterNext(iter: MessagePactMetadataIterator): MessagePactMetadataTriple;
  
    /** /data/input/pact.h#L2514 */
    export declare function messagePactMetadataIterDelete(iter: MessagePactMetadataIterator): void;
  
    /** /data/input/pact.h#L2519 */
    export declare function messagePactMetadataTripleDelete(triple: MessagePactMetadataTriple): void;
  
    /** /data/input/pact.h#L2557 */
    export declare function providerGetName(provider: Provider): string;
  
    /** /data/input/pact.h#L2568 */
    export declare function pactGetProvider(pact: Pact): Provider;
  
    /** /data/input/pact.h#L2573 */
    export declare function pactProviderDelete(provider: Provider): void;
  
    /** /data/input/pact.h#L2586 */
    export declare function providerStateGetName(provider_state: ProviderState): string;
  
    /** /data/input/pact.h#L2606 */
    export declare function providerStateGetParamIter(provider_state: ProviderState): ProviderStateParamIterator;
  
    /** /data/input/pact.h#L2624 */
    export declare function providerStateParamIterNext(iter: ProviderStateParamIterator): ProviderStateParamPair;
  
    /** /data/input/pact.h#L2629 */
    export declare function providerStateDelete(provider_state: ProviderState): void;
  
    /** /data/input/pact.h#L2634 */
    export declare function providerStateParamIterDelete(iter: ProviderStateParamIterator): void;
  
    /** /data/input/pact.h#L2639 */
    export declare function providerStateParamPairDelete(pair: ProviderStateParamPair): void;
  
    /** /data/input/pact.h#L2652 */
    export declare function syncMessageNew(): SynchronousMessage;
  
    /** /data/input/pact.h#L2657 */
    export declare function syncMessageDelete(message: SynchronousMessage): void;
  
    /** /data/input/pact.h#L2675 */
    export declare function syncMessageGetRequestContentsStr(message: SynchronousMessage): string;
  
    /** /data/input/pact.h#L2694 */
    export declare function syncMessageSetRequestContentsStr(message: SynchronousMessage, contents: string, content_type: string): void;
  
    /** /data/input/pact.h#L2710 */
    export declare function syncMessageGetRequestContentsLength(message: SynchronousMessage): string;
  
    /** /data/input/pact.h#L2726 */
    export declare function syncMessageGetRequestContentsBin(message: SynchronousMessage): string;
  
    /** /data/input/pact.h#L2746 */
    export declare function syncMessageSetRequestContentsBin(message: SynchronousMessage, contents: string, len: string, content_type: string): void;
  
    /** /data/input/pact.h#L2763 */
    export declare function syncMessageGetRequestContents(message: SynchronousMessage): MessageContents;
  
    /** /data/input/pact.h#L2776 */
    export declare function syncMessageGetNumberResponses(message: SynchronousMessage): string;
  
    /** /data/input/pact.h#L2795 */
    export declare function syncMessageGetResponseContentsStr(message: SynchronousMessage, index: string): string;
  
    /** /data/input/pact.h#L2817 */
    export declare function syncMessageSetResponseContentsStr(message: SynchronousMessage, index: string, contents: string, content_type: string): void;
  
    /** /data/input/pact.h#L2834 */
    export declare function syncMessageGetResponseContentsLength(message: SynchronousMessage, index: string): string;
  
    /** /data/input/pact.h#L2851 */
    export declare function syncMessageGetResponseContentsBin(message: SynchronousMessage, index: string): string;
  
    /** /data/input/pact.h#L2875 */
    export declare function syncMessageSetResponseContentsBin(message: SynchronousMessage, index: string, contents: string, len: string, content_type: string): void;
  
    /** /data/input/pact.h#L2893 */
    export declare function syncMessageGetResponseContents(message: SynchronousMessage, index: string): MessageContents;
  
    /** /data/input/pact.h#L2913 */
    export declare function syncMessageGetDescription(message: SynchronousMessage): string;
  
    /** /data/input/pact.h#L2930 */
    export declare function syncMessageSetDescription(message: SynchronousMessage, description: string): string;
  
    /** /data/input/pact.h#L2950 */
    export declare function syncMessageGetProviderState(message: SynchronousMessage, index: string): ProviderState;
  
    /** /data/input/pact.h#L2964 */
    export declare function syncMessageGetProviderStateIter(message: SynchronousMessage): ProviderStateIterator;
  
    /** /data/input/pact.h#L2976 */
    export declare function stringDelete(string: string): void;
  
    /** /data/input/pact.h#L3003 */
    export declare function createMockServer(pact_str: string, addr_str: string, tls: number): number;
  
    /** /data/input/pact.h#L3017 */
    export declare function getTlsCaCertificate(): string;
  
    /** /data/input/pact.h#L3043 */
    export declare function createMockServerForPact(pact: PactFfi.PactHandle, addr_str: string, tls: number): number;
  
    /** /data/input/pact.h#L3079 */
    export declare function createMockServerForTransport(pact: PactFfi.PactHandle, addr: string, port: number, transport: string, transport_config: string|null): number;
  
    /** /data/input/pact.h#L3091 */
    export declare function mockServerMatched(mock_server_port: number): string;
  
    /** /data/input/pact.h#L3108 */
    export declare function mockServerMismatches(mock_server_port: number): string;
  
    /** /data/input/pact.h#L3115 */
    export declare function cleanupMockServer(mock_server_port: number): string;
  
    /** /data/input/pact.h#L3138 */
    export declare function writePactFile(mock_server_port: number, directory: string, overwrite: number): number;
  
    /** /data/input/pact.h#L3147 */
    export declare function mockServerLogs(mock_server_port: number): string;
  
    /** /data/input/pact.h#L3159 */
    export declare function generateDatetimeString(format: string): StringResult;
  
    /** /data/input/pact.h#L3169 */
    export declare function checkRegex(regex: string, example: string): string;
  
    /** /data/input/pact.h#L3180 */
    export declare function generateRegexValue(regex: string): StringResult;
  
    /** /data/input/pact.h#L3192 */
    export declare function freeString(s: string): void;
  
    /** /data/input/pact.h#L3203 */
    export declare function newPact(consumer_name: string, provider_name: string): PactFfi.PactHandle;
  
    /** /data/input/pact.h#L3212 */
    export declare function newInteraction(pact: PactFfi.PactHandle, description: string): PactFfi.InteractionHandle;
  
    /** /data/input/pact.h#L3220 */
    export declare function newMessageInteraction(pact: PactFfi.PactHandle, description: string): PactFfi.InteractionHandle;
  
    /** /data/input/pact.h#L3228 */
    export declare function newSyncMessageInteraction(pact: PactFfi.PactHandle, description: string): PactFfi.InteractionHandle;
  
    /** /data/input/pact.h#L3236 */
    export declare function uponReceiving(interaction: PactFfi.InteractionHandle, description: string): string;
  
    /** /data/input/pact.h#L3244 */
    export declare function given(interaction: PactFfi.InteractionHandle, description: string): string;
  
    /** /data/input/pact.h#L3263 */
    export declare function interactionTestName(interaction: PactFfi.InteractionHandle, test_name: string): string;
  
    /** /data/input/pact.h#L3276 */
    export declare function givenWithParam(interaction: PactFfi.InteractionHandle, description: string, name: string, value: string): string;
  
    /** /data/input/pact.h#L3297 */
    export declare function withRequest(interaction: PactFfi.InteractionHandle, method: string, path: string): string;
  
    /** /data/input/pact.h#L3311 */
    export declare function withQueryParameter(interaction: PactFfi.InteractionHandle, name: string, index: string, value: string): string;
  
    /** /data/input/pact.h#L3352 */
    export declare function withQueryParameterV2(interaction: PactFfi.InteractionHandle, name: string, index: string, value: string): string;
  
    /** /data/input/pact.h#L3364 */
    export declare function withSpecification(pact: PactFfi.PactHandle, version: PactFfi.PactSpecification): string;
  
    /** /data/input/pact.h#L3376 */
    export declare function withPactMetadata(pact: PactFfi.PactHandle, namespace_: string, name: string, value: string): string;
  
    /** /data/input/pact.h#L3392 */
    export declare function withHeader(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, name: string, index: string, value: string): string;
  
    /** /data/input/pact.h#L3434 */
    export declare function withHeaderV2(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, name: string, index: string, value: string): string;
  
    /** /data/input/pact.h#L3446 */
    export declare function responseStatus(interaction: PactFfi.InteractionHandle, status: string): string;
  
    /** /data/input/pact.h#L3474 */
    export declare function withBody(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: string, body: string): string;
  
    /** /data/input/pact.h#L3506 */
    export declare function withBinaryFile(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: string, body: string, size: string): string;
  
    /** /data/input/pact.h#L3537 */
    export declare function withMultipartFile(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: string, file: string, part_name: string): StringResult;
  
    /** /data/input/pact.h#L3558 */
    export declare function pactHandleGetMessageIter(pact: PactFfi.PactHandle): PactMessageIterator;
  
    /** /data/input/pact.h#L3575 */
    export declare function pactHandleGetSyncMessageIter(pact: PactFfi.PactHandle): PactSyncMessageIterator;
  
    /** /data/input/pact.h#L3592 */
    export declare function pactHandleGetSyncHttpIter(pact: PactFfi.PactHandle): PactSyncHttpIterator;
  
    /** /data/input/pact.h#L3603 */
    export declare function newMessagePact(consumer_name: string, provider_name: string): PactFfi.MessagePactHandle;
  
    /** /data/input/pact.h#L3613 */
    export declare function newMessage(pact: PactFfi.MessagePactHandle, description: string): PactFfi.MessageHandle;
  
    /** /data/input/pact.h#L3620 */
    export declare function messageExpectsToReceive(message: PactFfi.MessageHandle, description: string): void;
  
    /** /data/input/pact.h#L3627 */
    export declare function messageGiven(message: PactFfi.MessageHandle, description: string): void;
  
    /** /data/input/pact.h#L3636 */
    export declare function messageGivenWithParam(message: PactFfi.MessageHandle, description: string, name: string, value: string): void;
  
    /** /data/input/pact.h#L3655 */
    export declare function messageWithContents(message_handle: PactFfi.MessageHandle, content_type: string, body: string, size: string): void;
  
    /** /data/input/pact.h#L3666 */
    export declare function messageWithMetadata(message_handle: PactFfi.MessageHandle, key: string, value: string): void;
  
    /** /data/input/pact.h#L3676 */
    export declare function messageReify(message_handle: PactFfi.MessageHandle): string;
  
    /** /data/input/pact.h#L3698 */
    export declare function writeMessagePactFile(pact: PactFfi.MessagePactHandle, directory: string, overwrite: string): number;
  
    /** /data/input/pact.h#L3710 */
    export declare function withMessagePactMetadata(pact: PactFfi.MessagePactHandle, namespace_: string, name: string, value: string): void;
  
    /** /data/input/pact.h#L3740 */
    export declare function pactHandleWriteFile(pact: PactFfi.PactHandle, directory: string, overwrite: string): number;
  
    /** /data/input/pact.h#L3749 */
    export declare function newAsyncMessage(pact: PactFfi.PactHandle, description: string): PactFfi.MessageHandle;
  
    /** /data/input/pact.h#L3761 */
    export declare function freePactHandle(pact: PactFfi.PactHandle): string;
  
    /** /data/input/pact.h#L3773 */
    export declare function freeMessagePactHandle(pact: PactFfi.MessagePactHandle): string;
  
    /** /data/input/pact.h#L3795 */
    export declare function verify(args: string): number;
  
    /** /data/input/pact.h#L3812 */
    export declare function verifierNew(): VerifierHandle;
  
    /** /data/input/pact.h#L3826 */
    export declare function verifierNewForApplication(name: string, version: string): VerifierHandle;
  
    /** /data/input/pact.h#L3831 */
    export declare function verifierShutdown(handle: VerifierHandle): void;
  
    /** /data/input/pact.h#L3843 */
    export declare function verifierSetProviderInfo(handle: VerifierHandle, name: string, scheme: string, host: string, port: number, path: string): void;
  
    /** /data/input/pact.h#L3864 */
    export declare function verifierAddProviderTransport(handle: VerifierHandle, protocol: string, port: number, path: string, scheme: string): void;
  
    /** /data/input/pact.h#L3883 */
    export declare function verifierSetFilterInfo(handle: VerifierHandle, filter_description: string, filter_state: string, filter_no_state: string): void;
  
    /** /data/input/pact.h#L3904 */
    export declare function verifierSetProviderState(handle: VerifierHandle, url: string, teardown: string, body: string): void;
  
    /** /data/input/pact.h#L3920 */
    export declare function verifierSetVerificationOptions(handle: VerifierHandle, disable_ssl_verification: string, request_timeout: bigint): string;
  
    /** /data/input/pact.h#L3935 */
    export declare function verifierSetColouredOutput(handle: VerifierHandle, coloured_output: string): string;
  
    /** /data/input/pact.h#L3949 */
    export declare function verifierSetNoPactsIsError(handle: VerifierHandle, is_error: string): string;
  
    /** /data/input/pact.h#L3969 */
    export declare function verifierSetPublishOptions(handle: VerifierHandle, provider_version: string, build_url: string, provider_tags: string, provider_tags_len: string, provider_branch: string): string;
  
    /** /data/input/pact.h#L3985 */
    export declare function verifierSetConsumerFilters(handle: VerifierHandle, consumer_filters: string, consumer_filters_len: string): void;
  
    /** /data/input/pact.h#L3997 */
    export declare function verifierAddCustomHeader(handle: VerifierHandle, header_name: string, header_value: string): void;
  
    /** /data/input/pact.h#L4010 */
    export declare function verifierAddFileSource(handle: VerifierHandle, file: string): void;
  
    /** /data/input/pact.h#L4022 */
    export declare function verifierAddDirectorySource(handle: VerifierHandle, directory: string): void;
  
    /** /data/input/pact.h#L4036 */
    export declare function verifierUrlSource(handle: VerifierHandle, url: string, username: string, password: string, token: string): void;
  
    /** /data/input/pact.h#L4055 */
    export declare function verifierBrokerSource(handle: VerifierHandle, url: string, username: string, password: string, token: string): void;
  
    /** /data/input/pact.h#L4082 */
    export declare function verifierBrokerSourceWithSelectors(handle: VerifierHandle, url: string, username: string, password: string, token: string, enable_pending: string, include_wip_pacts_since: string, provider_tags: string, provider_tags_len: string, provider_branch: string, consumer_version_selectors: string, consumer_version_selectors_len: string, consumer_version_tags: string, consumer_version_tags_len: string): void;
  
    /** /data/input/pact.h#L4104 */
    export declare function verifierExecute(handle: VerifierHandle): string;
  
    /** /data/input/pact.h#L4155 */
    export declare function verifierCliArgs(): string;
  
    /** /data/input/pact.h#L4164 */
    export declare function verifierLogs(handle: VerifierHandle): string;
  
    /** /data/input/pact.h#L4173 */
    export declare function verifierLogsForProvider(provider_name: string): string;
  
    /** /data/input/pact.h#L4184 */
    export declare function verifierOutput(handle: VerifierHandle, strip_ansi: string): string;
  
    /** /data/input/pact.h#L4192 */
    export declare function verifierJson(handle: VerifierHandle): string;
  
    /** /data/input/pact.h#L4220 */
    export declare function usingPlugin(pact: PactFfi.PactHandle, plugin_name: string, plugin_version: string): string;
  
    /** /data/input/pact.h#L4228 */
    export declare function cleanupPlugins(pact: PactFfi.PactHandle): void;
  
    /** /data/input/pact.h#L4258 */
    export declare function interactionContents(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: string, contents: string): string;
  
    /** /data/input/pact.h#L4279 */
    export declare function matchesStringValue(matching_rule: MatchingRule, expected_value: string, actual_value: string, cascaded: string): string;
  
    /** /data/input/pact.h#L4299 */
    export declare function matchesU64Value(matching_rule: MatchingRule, expected_value: string, actual_value: string, cascaded: string): string;
  
    /** /data/input/pact.h#L4319 */
    export declare function matchesI64Value(matching_rule: MatchingRule, expected_value: string, actual_value: string, cascaded: string): string;
  
    /** /data/input/pact.h#L4339 */
    export declare function matchesF64Value(matching_rule: MatchingRule, expected_value: bigint, actual_value: bigint, cascaded: string): string;
  
    /** /data/input/pact.h#L4359 */
    export declare function matchesBoolValue(matching_rule: MatchingRule, expected_value: string, actual_value: string, cascaded: string): string;
  
    /** /data/input/pact.h#L4383 */
    export declare function matchesBinaryValue(matching_rule: MatchingRule, expected_value: string, expected_value_len: string, actual_value: string, actual_value_len: string, cascaded: string): string;
  
    /** /data/input/pact.h#L4406 */
    export declare function matchesJsonValue(matching_rule: MatchingRule, expected_value: string, actual_value: string, cascaded: string): string;
}
