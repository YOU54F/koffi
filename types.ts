
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
  export type VerifierHandle = string;

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
  export type PactHandle = number;

  // /** /data/input/pact.h#L476 */
  export type StringResult_Tag = PactFfi.StringResult_TagValue;

  // /** /data/input/pact.h#L488 */
  export type StringResult = String;

  /** /data/input/pact.h#L493 */
  export type InteractionHandle = number;

  /** /data/input/pact.h#L498 */
  export type MessagePactHandle = number;

  /** /data/input/pact.h#L503 */
  export type MessageHandle = number;

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

  /** .stdlib.h#L540 */
  export declare function malloc(__size: number): void;

  /** .stdlib.h#L543 */
  export declare function calloc(__nmemb: number, __size: number): void;

  /** .stdlib.h#L551 */
  export declare function realloc(__ptr: void, __size: number): void;

  /** .stdlib.h#L555 */
  export declare function free(__ptr: void): void;

  /** .stdlib.h#L586 */
  export declare function posix_memalign(__memptr: void, __alignment: number, __size: number): number;

  /** .stdlib.h#L598 */
  export declare function abort(): void;

  /** .stdlib.h#L641 */
  export declare function getenv(__name: number): number;

  /** .stdlib.h#L808 */
  export declare function realpath(__name: number, __resolved: number): number;

  /** /data/input/pact.h#L508 */
  export declare function pactffi_version(): number;

  /** /data/input/pact.h#L519 */
  export declare function pactffi_init(log_env_var: number): void;

  /** /data/input/pact.h#L529 */
  export declare function pactffi_init_with_log_level(level: number): void;

  /** /data/input/pact.h#L538 */
  export declare function pactffi_enable_ansi_support(): void;

  /** /data/input/pact.h#L553 */
  export declare function pactffi_log_message(source: number, log_level: number, message: number): void;

  /** /data/input/pact.h#L559 */
  export declare function pactffi_match_message(msg_1: Message, msg_2: Message): Mismatches;

  /** /data/input/pact.h#L565 */
  export declare function pactffi_mismatches_get_iter(mismatches: Mismatches): MismatchesIterator;

  /** /data/input/pact.h#L570 */
  export declare function pactffi_mismatches_delete(mismatches: Mismatches): void;

  /** /data/input/pact.h#L577 */
  export declare function pactffi_mismatches_iter_next(iter: MismatchesIterator): Mismatch;

  /** /data/input/pact.h#L582 */
  export declare function pactffi_mismatches_iter_delete(iter: MismatchesIterator): void;

  /** /data/input/pact.h#L587 */
  export declare function pactffi_mismatch_to_json(mismatch: Mismatch): number;

  /** /data/input/pact.h#L592 */
  export declare function pactffi_mismatch_type(mismatch: Mismatch): number;

  /** /data/input/pact.h#L597 */
  export declare function pactffi_mismatch_summary(mismatch: Mismatch): number;

  /** /data/input/pact.h#L602 */
  export declare function pactffi_mismatch_description(mismatch: Mismatch): number;

  /** /data/input/pact.h#L607 */
  export declare function pactffi_mismatch_ansi_description(mismatch: Mismatch): number;

  /** /data/input/pact.h#L646 */
  export declare function pactffi_get_error_message(buffer: number, length: number): number;

  /** /data/input/pact.h#L652 */
  export declare function pactffi_log_to_stdout(level_filter: PactFfi.LevelFilter): number;

  /** /data/input/pact.h#L657 */
  export declare function pactffi_log_to_stderr(level_filter: PactFfi.LevelFilter): number;

  /** /data/input/pact.h#L666 */
  export declare function pactffi_log_to_file(file_name: number, level_filter: PactFfi.LevelFilter): number;

  /** /data/input/pact.h#L671 */
  export declare function pactffi_log_to_buffer(level_filter: PactFfi.LevelFilter): number;

  /** /data/input/pact.h#L688 */
  export declare function pactffi_logger_init(): void;

  /** /data/input/pact.h#L725 */
  export declare function pactffi_logger_attach_sink(sink_specifier: number, level_filter: PactFfi.LevelFilter): number;

  /** /data/input/pact.h#L735 */
  export declare function pactffi_logger_apply(): number;

  /** /data/input/pact.h#L753 */
  export declare function pactffi_fetch_log_buffer(log_id: number): number;

  /** /data/input/pact.h#L763 */
  export declare function pactffi_parse_pact_json(json: number): Pact;

  /** /data/input/pact.h#L768 */
  export declare function pactffi_pact_model_delete(pact: Pact): void;

  /** /data/input/pact.h#L782 */
  export declare function pactffi_pact_model_interaction_iterator(pact: Pact): PactInteractionIterator;

  /** /data/input/pact.h#L787 */
  export declare function pactffi_pact_spec_version(pact: Pact): PactFfi.PactSpecification;

  /** /data/input/pact.h#L792 */
  export declare function pactffi_pact_interaction_delete(interaction: PactInteraction): void;

  /** /data/input/pact.h#L805 */
  export declare function pactffi_async_message_new(): AsynchronousMessage;

  /** /data/input/pact.h#L810 */
  export declare function pactffi_async_message_delete(message: AsynchronousMessage): void;

  /** /data/input/pact.h#L824 */
  export declare function pactffi_async_message_get_contents(message: AsynchronousMessage): MessageContents;

  /** /data/input/pact.h#L842 */
  export declare function pactffi_async_message_get_contents_str(message: AsynchronousMessage): number;

  /** /data/input/pact.h#L861 */
  export declare function pactffi_async_message_set_contents_str(message: AsynchronousMessage, contents: number, content_type: number): void;

  /** /data/input/pact.h#L877 */
  export declare function pactffi_async_message_get_contents_length(message: AsynchronousMessage): number;

  /** /data/input/pact.h#L893 */
  export declare function pactffi_async_message_get_contents_bin(message: AsynchronousMessage): number;

  /** /data/input/pact.h#L913 */
  export declare function pactffi_async_message_set_contents_bin(message: AsynchronousMessage, contents: number, len: number, content_type: number): void;

  /** /data/input/pact.h#L934 */
  export declare function pactffi_async_message_get_description(message: AsynchronousMessage): number;

  /** /data/input/pact.h#L951 */
  export declare function pactffi_async_message_set_description(message: AsynchronousMessage, description: number): number;

  /** /data/input/pact.h#L970 */
  export declare function pactffi_async_message_get_provider_state(message: AsynchronousMessage, index: number): ProviderState;

  /** /data/input/pact.h#L984 */
  export declare function pactffi_async_message_get_provider_state_iter(message: AsynchronousMessage): ProviderStateIterator;

  /** /data/input/pact.h#L1022 */
  export declare function pactffi_consumer_get_name(consumer: Consumer): number;

  /** /data/input/pact.h#L1033 */
  export declare function pactffi_pact_get_consumer(pact: Pact): Consumer;

  /** /data/input/pact.h#L1038 */
  export declare function pactffi_pact_consumer_delete(consumer: Consumer): void;

  /** /data/input/pact.h#L1056 */
  export declare function pactffi_message_contents_get_contents_str(contents: MessageContents): number;

  /** /data/input/pact.h#L1075 */
  export declare function pactffi_message_contents_set_contents_str(contents: MessageContents, contents_str: number, content_type: number): void;

  /** /data/input/pact.h#L1091 */
  export declare function pactffi_message_contents_get_contents_length(contents: MessageContents): number;

  /** /data/input/pact.h#L1107 */
  export declare function pactffi_message_contents_get_contents_bin(contents: MessageContents): number;

  /** /data/input/pact.h#L1127 */
  export declare function pactffi_message_contents_set_contents_bin(contents: MessageContents, contents_bin: number, len: number, content_type: number): void;

  /** /data/input/pact.h#L1153 */
  export declare function pactffi_message_contents_get_metadata_iter(contents: MessageContents): MessageMetadataIterator;

  /** /data/input/pact.h#L1179 */
  export declare function pactffi_message_contents_get_matching_rule_iter(contents: MessageContents, category: PactFfi.MatchingRuleCategory): MatchingRuleCategoryIterator;

  /** /data/input/pact.h#L1203 */
  export declare function pactffi_request_contents_get_matching_rule_iter(request: HttpRequest, category: PactFfi.MatchingRuleCategory): MatchingRuleCategoryIterator;

  /** /data/input/pact.h#L1227 */
  export declare function pactffi_response_contents_get_matching_rule_iter(response: HttpResponse, category: PactFfi.MatchingRuleCategory): MatchingRuleCategoryIterator;

  /** /data/input/pact.h#L1245 */
  export declare function pactffi_message_contents_get_generators_iter(contents: MessageContents, category: PactFfi.GeneratorCategory): GeneratorCategoryIterator;

  /** /data/input/pact.h#L1263 */
  export declare function pactffi_request_contents_get_generators_iter(request: HttpRequest, category: PactFfi.GeneratorCategory): GeneratorCategoryIterator;

  /** /data/input/pact.h#L1281 */
  export declare function pactffi_response_contents_get_generators_iter(response: HttpResponse, category: PactFfi.GeneratorCategory): GeneratorCategoryIterator;

  /** /data/input/pact.h#L1305 */
  export declare function pactffi_parse_matcher_definition(expression: number): MatchingRuleDefinitionResult;

  /** /data/input/pact.h#L1312 */
  export declare function pactffi_matcher_definition_error(definition: MatchingRuleDefinitionResult): number;

  /** /data/input/pact.h#L1323 */
  export declare function pactffi_matcher_definition_value(definition: MatchingRuleDefinitionResult): number;

  /** /data/input/pact.h#L1328 */
  export declare function pactffi_matcher_definition_delete(definition: MatchingRuleDefinitionResult): void;

  /** /data/input/pact.h#L1339 */
  export declare function pactffi_matcher_definition_generator(definition: MatchingRuleDefinitionResult): Generator;

  /** /data/input/pact.h#L1345 */
  export declare function pactffi_matcher_definition_value_type(definition: MatchingRuleDefinitionResult): PactFfi.ExpressionValueType;

  /** /data/input/pact.h#L1350 */
  export declare function pactffi_matching_rule_iter_delete(iter: MatchingRuleIterator): void;

  /** /data/input/pact.h#L1358 */
  export declare function pactffi_matcher_definition_iter(definition: MatchingRuleDefinitionResult): MatchingRuleIterator;

  /** /data/input/pact.h#L1375 */
  export declare function pactffi_matching_rule_iter_next(iter: MatchingRuleIterator): MatchingRuleResult;

  /** /data/input/pact.h#L1412 */
  export declare function pactffi_matching_rule_id(rule_result: MatchingRuleResult): number;

  /** /data/input/pact.h#L1453 */
  export declare function pactffi_matching_rule_value(rule_result: MatchingRuleResult): number;

  /** /data/input/pact.h#L1464 */
  export declare function pactffi_matching_rule_pointer(rule_result: MatchingRuleResult): MatchingRule;

  /** /data/input/pact.h#L1487 */
  export declare function pactffi_matching_rule_reference_name(rule_result: MatchingRuleResult): number;

  /** /data/input/pact.h#L1504 */
  export declare function pactffi_validate_datetime(value: number, format: number): number;

  /** /data/input/pact.h#L1516 */
  export declare function pactffi_generator_to_json(generator: Generator): number;

  /** /data/input/pact.h#L1526 */
  export declare function pactffi_generator_generate_string(generator: Generator, context_json: number): number;

  /** /data/input/pact.h#L1537 */
  export declare function pactffi_generator_generate_integer(generator: Generator, context_json: number): number;

  /** /data/input/pact.h#L1543 */
  export declare function pactffi_generators_iter_delete(iter: GeneratorCategoryIterator): void;

  /** /data/input/pact.h#L1558 */
  export declare function pactffi_generators_iter_next(iter: GeneratorCategoryIterator): GeneratorKeyValuePair;

  /** /data/input/pact.h#L1563 */
  export declare function pactffi_generators_iter_pair_delete(pair: GeneratorKeyValuePair): void;

  /** /data/input/pact.h#L1576 */
  export declare function pactffi_sync_http_new(): SynchronousHttp;

  /** /data/input/pact.h#L1581 */
  export declare function pactffi_sync_http_delete(interaction: SynchronousHttp): void;

  /** /data/input/pact.h#L1595 */
  export declare function pactffi_sync_http_get_request(interaction: SynchronousHttp): HttpRequest;

  /** /data/input/pact.h#L1613 */
  export declare function pactffi_sync_http_get_request_contents(interaction: SynchronousHttp): number;

  /** /data/input/pact.h#L1632 */
  export declare function pactffi_sync_http_set_request_contents(interaction: SynchronousHttp, contents: number, content_type: number): void;

  /** /data/input/pact.h#L1648 */
  export declare function pactffi_sync_http_get_request_contents_length(interaction: SynchronousHttp): number;

  /** /data/input/pact.h#L1664 */
  export declare function pactffi_sync_http_get_request_contents_bin(interaction: SynchronousHttp): number;

  /** /data/input/pact.h#L1684 */
  export declare function pactffi_sync_http_set_request_contents_bin(interaction: SynchronousHttp, contents: number, len: number, content_type: number): void;

  /** /data/input/pact.h#L1701 */
  export declare function pactffi_sync_http_get_response(interaction: SynchronousHttp): HttpResponse;

  /** /data/input/pact.h#L1720 */
  export declare function pactffi_sync_http_get_response_contents(interaction: SynchronousHttp): number;

  /** /data/input/pact.h#L1739 */
  export declare function pactffi_sync_http_set_response_contents(interaction: SynchronousHttp, contents: number, content_type: number): void;

  /** /data/input/pact.h#L1755 */
  export declare function pactffi_sync_http_get_response_contents_length(interaction: SynchronousHttp): number;

  /** /data/input/pact.h#L1771 */
  export declare function pactffi_sync_http_get_response_contents_bin(interaction: SynchronousHttp): number;

  /** /data/input/pact.h#L1791 */
  export declare function pactffi_sync_http_set_response_contents_bin(interaction: SynchronousHttp, contents: number, len: number, content_type: number): void;

  /** /data/input/pact.h#L1813 */
  export declare function pactffi_sync_http_get_description(interaction: SynchronousHttp): number;

  /** /data/input/pact.h#L1830 */
  export declare function pactffi_sync_http_set_description(interaction: SynchronousHttp, description: number): number;

  /** /data/input/pact.h#L1849 */
  export declare function pactffi_sync_http_get_provider_state(interaction: SynchronousHttp, index: number): ProviderState;

  /** /data/input/pact.h#L1863 */
  export declare function pactffi_sync_http_get_provider_state_iter(interaction: SynchronousHttp): ProviderStateIterator;

  /** /data/input/pact.h#L1877 */
  export declare function pactffi_pact_interaction_as_synchronous_http(interaction: PactInteraction): SynchronousHttp;

  /** /data/input/pact.h#L1894 */
  export declare function pactffi_pact_interaction_as_message(interaction: PactInteraction): Message;

  /** /data/input/pact.h#L1911 */
  export declare function pactffi_pact_interaction_as_asynchronous_message(interaction: PactInteraction): AsynchronousMessage;

  /** /data/input/pact.h#L1925 */
  export declare function pactffi_pact_interaction_as_synchronous_message(interaction: PactInteraction): SynchronousMessage;

  /** /data/input/pact.h#L1930 */
  export declare function pactffi_pact_message_iter_delete(iter: PactMessageIterator): void;

  /** /data/input/pact.h#L1949 */
  export declare function pactffi_pact_message_iter_next(iter: PactMessageIterator): Message;

  /** /data/input/pact.h#L1968 */
  export declare function pactffi_pact_sync_message_iter_next(iter: PactSyncMessageIterator): SynchronousMessage;

  /** /data/input/pact.h#L1973 */
  export declare function pactffi_pact_sync_message_iter_delete(iter: PactSyncMessageIterator): void;

  /** /data/input/pact.h#L1992 */
  export declare function pactffi_pact_sync_http_iter_next(iter: PactSyncHttpIterator): SynchronousHttp;

  /** /data/input/pact.h#L1997 */
  export declare function pactffi_pact_sync_http_iter_delete(iter: PactSyncHttpIterator): void;

  /** /data/input/pact.h#L2016 */
  export declare function pactffi_pact_interaction_iter_next(iter: PactInteractionIterator): PactInteraction;

  /** /data/input/pact.h#L2021 */
  export declare function pactffi_pact_interaction_iter_delete(iter: PactInteractionIterator): void;

  /** /data/input/pact.h#L2033 */
  export declare function pactffi_matching_rule_to_json(rule: MatchingRule): number;

  /** /data/input/pact.h#L2038 */
  export declare function pactffi_matching_rules_iter_delete(iter: MatchingRuleCategoryIterator): void;

  /** /data/input/pact.h#L2053 */
  export declare function pactffi_matching_rules_iter_next(iter: MatchingRuleCategoryIterator): MatchingRuleKeyValuePair;

  /** /data/input/pact.h#L2058 */
  export declare function pactffi_matching_rules_iter_pair_delete(pair: MatchingRuleKeyValuePair): void;

  /** /data/input/pact.h#L2071 */
  export declare function pactffi_message_new(): Message;

  /** /data/input/pact.h#L2084 */
  export declare function pactffi_message_new_from_json(index: number, json_str: number, spec_version: PactFfi.PactSpecification): Message;

  /** /data/input/pact.h#L2099 */
  export declare function pactffi_message_new_from_body(body: number, content_type: number): Message;

  /** /data/input/pact.h#L2104 */
  export declare function pactffi_message_delete(message: Message): void;

  /** /data/input/pact.h#L2122 */
  export declare function pactffi_message_get_contents(message: Message): number;

  /** /data/input/pact.h#L2137 */
  export declare function pactffi_message_set_contents(message: Message, contents: number, content_type: number): void;

  /** /data/input/pact.h#L2153 */
  export declare function pactffi_message_get_contents_length(message: Message): number;

  /** /data/input/pact.h#L2169 */
  export declare function pactffi_message_get_contents_bin(message: Message): number;

  /** /data/input/pact.h#L2184 */
  export declare function pactffi_message_set_contents_bin(message: Message, contents: number, len: number, content_type: number): void;

  /** /data/input/pact.h#L2206 */
  export declare function pactffi_message_get_description(message: Message): number;

  /** /data/input/pact.h#L2223 */
  export declare function pactffi_message_set_description(message: Message, description: number): number;

  /** /data/input/pact.h#L2242 */
  export declare function pactffi_message_get_provider_state(message: Message, index: number): ProviderState;

  /** /data/input/pact.h#L2256 */
  export declare function pactffi_message_get_provider_state_iter(message: Message): ProviderStateIterator;

  /** /data/input/pact.h#L2272 */
  export declare function pactffi_provider_state_iter_next(iter: ProviderStateIterator): ProviderState;

  /** /data/input/pact.h#L2277 */
  export declare function pactffi_provider_state_iter_delete(iter: ProviderStateIterator): void;

  /** /data/input/pact.h#L2300 */
  export declare function pactffi_message_find_metadata(message: Message, key: number): number;

  /** /data/input/pact.h#L2316 */
  export declare function pactffi_message_insert_metadata(message: Message, key: number, value: number): number;

  /** /data/input/pact.h#L2331 */
  export declare function pactffi_message_metadata_iter_next(iter: MessageMetadataIterator): MessageMetadataPair;

  /** /data/input/pact.h#L2351 */
  export declare function pactffi_message_get_metadata_iter(message: Message): MessageMetadataIterator;

  /** /data/input/pact.h#L2356 */
  export declare function pactffi_message_metadata_iter_delete(iter: MessageMetadataIterator): void;

  /** /data/input/pact.h#L2361 */
  export declare function pactffi_message_metadata_pair_delete(pair: MessageMetadataPair): void;

  /** /data/input/pact.h#L2376 */
  export declare function pactffi_message_pact_new_from_json(file_name: number, json_str: number): MessagePact;

  /** /data/input/pact.h#L2381 */
  export declare function pactffi_message_pact_delete(message_pact: MessagePact): void;

  /** /data/input/pact.h#L2397 */
  export declare function pactffi_message_pact_get_consumer(message_pact: MessagePact): Consumer;

  /** /data/input/pact.h#L2413 */
  export declare function pactffi_message_pact_get_provider(message_pact: MessagePact): Provider;

  /** /data/input/pact.h#L2433 */
  export declare function pactffi_message_pact_get_message_iter(message_pact: MessagePact): MessagePactMessageIterator;

  /** /data/input/pact.h#L2446 */
  export declare function pactffi_message_pact_message_iter_next(iter: MessagePactMessageIterator): Message;

  /** /data/input/pact.h#L2451 */
  export declare function pactffi_message_pact_message_iter_delete(iter: MessagePactMessageIterator): void;

  /** /data/input/pact.h#L2474 */
  export declare function pactffi_message_pact_find_metadata(message_pact: MessagePact, key1: number, key2: number): number;

  /** /data/input/pact.h#L2496 */
  export declare function pactffi_message_pact_get_metadata_iter(message_pact: MessagePact): MessagePactMetadataIterator;

  /** /data/input/pact.h#L2509 */
  export declare function pactffi_message_pact_metadata_iter_next(iter: MessagePactMetadataIterator): MessagePactMetadataTriple;

  /** /data/input/pact.h#L2514 */
  export declare function pactffi_message_pact_metadata_iter_delete(iter: MessagePactMetadataIterator): void;

  /** /data/input/pact.h#L2519 */
  export declare function pactffi_message_pact_metadata_triple_delete(triple: MessagePactMetadataTriple): void;

  /** /data/input/pact.h#L2557 */
  export declare function pactffi_provider_get_name(provider: Provider): number;

  /** /data/input/pact.h#L2568 */
  export declare function pactffi_pact_get_provider(pact: Pact): Provider;

  /** /data/input/pact.h#L2573 */
  export declare function pactffi_pact_provider_delete(provider: Provider): void;

  /** /data/input/pact.h#L2586 */
  export declare function pactffi_provider_state_get_name(provider_state: ProviderState): number;

  /** /data/input/pact.h#L2606 */
  export declare function pactffi_provider_state_get_param_iter(provider_state: ProviderState): ProviderStateParamIterator;

  /** /data/input/pact.h#L2624 */
  export declare function pactffi_provider_state_param_iter_next(iter: ProviderStateParamIterator): ProviderStateParamPair;

  /** /data/input/pact.h#L2629 */
  export declare function pactffi_provider_state_delete(provider_state: ProviderState): void;

  /** /data/input/pact.h#L2634 */
  export declare function pactffi_provider_state_param_iter_delete(iter: ProviderStateParamIterator): void;

  /** /data/input/pact.h#L2639 */
  export declare function pactffi_provider_state_param_pair_delete(pair: ProviderStateParamPair): void;

  /** /data/input/pact.h#L2652 */
  export declare function pactffi_sync_message_new(): SynchronousMessage;

  /** /data/input/pact.h#L2657 */
  export declare function pactffi_sync_message_delete(message: SynchronousMessage): void;

  /** /data/input/pact.h#L2675 */
  export declare function pactffi_sync_message_get_request_contents_str(message: SynchronousMessage): number;

  /** /data/input/pact.h#L2694 */
  export declare function pactffi_sync_message_set_request_contents_str(message: SynchronousMessage, contents: number, content_type: number): void;

  /** /data/input/pact.h#L2710 */
  export declare function pactffi_sync_message_get_request_contents_length(message: SynchronousMessage): number;

  /** /data/input/pact.h#L2726 */
  export declare function pactffi_sync_message_get_request_contents_bin(message: SynchronousMessage): number;

  /** /data/input/pact.h#L2746 */
  export declare function pactffi_sync_message_set_request_contents_bin(message: SynchronousMessage, contents: number, len: number, content_type: number): void;

  /** /data/input/pact.h#L2763 */
  export declare function pactffi_sync_message_get_request_contents(message: SynchronousMessage): MessageContents;

  /** /data/input/pact.h#L2776 */
  export declare function pactffi_sync_message_get_number_responses(message: SynchronousMessage): number;

  /** /data/input/pact.h#L2795 */
  export declare function pactffi_sync_message_get_response_contents_str(message: SynchronousMessage, index: number): number;

  /** /data/input/pact.h#L2817 */
  export declare function pactffi_sync_message_set_response_contents_str(message: SynchronousMessage, index: number, contents: number, content_type: number): void;

  /** /data/input/pact.h#L2834 */
  export declare function pactffi_sync_message_get_response_contents_length(message: SynchronousMessage, index: number): number;

  /** /data/input/pact.h#L2851 */
  export declare function pactffi_sync_message_get_response_contents_bin(message: SynchronousMessage, index: number): number;

  /** /data/input/pact.h#L2875 */
  export declare function pactffi_sync_message_set_response_contents_bin(message: SynchronousMessage, index: number, contents: number, len: number, content_type: number): void;

  /** /data/input/pact.h#L2893 */
  export declare function pactffi_sync_message_get_response_contents(message: SynchronousMessage, index: number): MessageContents;

  /** /data/input/pact.h#L2913 */
  export declare function pactffi_sync_message_get_description(message: SynchronousMessage): number;

  /** /data/input/pact.h#L2930 */
  export declare function pactffi_sync_message_set_description(message: SynchronousMessage, description: number): number;

  /** /data/input/pact.h#L2950 */
  export declare function pactffi_sync_message_get_provider_state(message: SynchronousMessage, index: number): ProviderState;

  /** /data/input/pact.h#L2964 */
  export declare function pactffi_sync_message_get_provider_state_iter(message: SynchronousMessage): ProviderStateIterator;

  /** /data/input/pact.h#L2976 */
  export declare function pactffi_string_delete(string: number): void;

  /** /data/input/pact.h#L3003 */
  export declare function pactffi_create_mock_server(pact_str: number, addr_str: number, tls: number): number;

  /** /data/input/pact.h#L3017 */
  export declare function pactffi_get_tls_ca_certificate(): number;

  /** /data/input/pact.h#L3043 */
  export declare function pactffi_create_mock_server_for_pact(pact: PactFfi.PactHandle, addr_str: number, tls: number): number;

  /** /data/input/pact.h#L3079 */
  export declare function pactffi_create_mock_server_for_transport(pact: PactFfi.PactHandle, addr: number, port: number, transport: number, transport_config: number): number;

  /** /data/input/pact.h#L3091 */
  export declare function pactffi_mock_server_matched(mock_server_port: number): number;

  /** /data/input/pact.h#L3108 */
  export declare function pactffi_mock_server_mismatches(mock_server_port: number): number;

  /** /data/input/pact.h#L3115 */
  export declare function pactffi_cleanup_mock_server(mock_server_port: number): number;

  /** /data/input/pact.h#L3138 */
  export declare function pactffi_write_pact_file(mock_server_port: number, directory: number, overwrite: number): number;

  /** /data/input/pact.h#L3147 */
  export declare function pactffi_mock_server_logs(mock_server_port: number): number;

  /** /data/input/pact.h#L3159 */
  export declare function pactffi_generate_datetime_string(format: number): StringResult;

  /** /data/input/pact.h#L3169 */
  export declare function pactffi_check_regex(regex: number, example: number): number;

  /** /data/input/pact.h#L3180 */
  export declare function pactffi_generate_regex_value(regex: number): StringResult;

  /** /data/input/pact.h#L3192 */
  export declare function pactffi_free_string(s: number): void;

  /** /data/input/pact.h#L3203 */
  export declare function pactffi_new_pact(consumer_name: number, provider_name: number): PactFfi.PactHandle;

  /** /data/input/pact.h#L3212 */
  export declare function pactffi_new_interaction(pact: PactFfi.PactHandle, description: number): PactFfi.InteractionHandle;

  /** /data/input/pact.h#L3220 */
  export declare function pactffi_new_message_interaction(pact: PactFfi.PactHandle, description: number): PactFfi.InteractionHandle;

  /** /data/input/pact.h#L3228 */
  export declare function pactffi_new_sync_message_interaction(pact: PactFfi.PactHandle, description: number): PactFfi.InteractionHandle;

  /** /data/input/pact.h#L3236 */
  export declare function pactffi_upon_receiving(interaction: PactFfi.InteractionHandle, description: number): number;

  /** /data/input/pact.h#L3244 */
  export declare function pactffi_given(interaction: PactFfi.InteractionHandle, description: number): number;

  /** /data/input/pact.h#L3263 */
  export declare function pactffi_interaction_test_name(interaction: PactFfi.InteractionHandle, test_name: number): number;

  /** /data/input/pact.h#L3276 */
  export declare function pactffi_given_with_param(interaction: PactFfi.InteractionHandle, description: number, name: number, value: number): number;

  /** /data/input/pact.h#L3297 */
  export declare function pactffi_with_request(interaction: PactFfi.InteractionHandle, method: number, path: number): number;

  /** /data/input/pact.h#L3311 */
  export declare function pactffi_with_query_parameter(interaction: PactFfi.InteractionHandle, name: number, index: number, value: number): number;

  /** /data/input/pact.h#L3352 */
  export declare function pactffi_with_query_parameter_v2(interaction: PactFfi.InteractionHandle, name: number, index: number, value: number): number;

  /** /data/input/pact.h#L3364 */
  export declare function pactffi_with_specification(pact: PactFfi.PactHandle, version: PactFfi.PactSpecification): number;

  /** /data/input/pact.h#L3376 */
  export declare function pactffi_with_pact_metadata(pact: PactFfi.PactHandle, namespace_: number, name: number, value: number): number;

  /** /data/input/pact.h#L3392 */
  export declare function pactffi_with_header(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, name: number, index: number, value: number): number;

  /** /data/input/pact.h#L3434 */
  export declare function pactffi_with_header_v2(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, name: number, index: number, value: number): number;

  /** /data/input/pact.h#L3446 */
  export declare function pactffi_response_status(interaction: PactFfi.InteractionHandle, status: number): number;

  /** /data/input/pact.h#L3474 */
  export declare function pactffi_with_body(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: number, body: number): number;

  /** /data/input/pact.h#L3506 */
  export declare function pactffi_with_binary_file(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: number, body: number, size: number): number;

  /** /data/input/pact.h#L3537 */
  export declare function pactffi_with_multipart_file(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: number, file: number, part_name: number): StringResult;

  /** /data/input/pact.h#L3558 */
  export declare function pactffi_pact_handle_get_message_iter(pact: PactFfi.PactHandle): PactMessageIterator;

  /** /data/input/pact.h#L3575 */
  export declare function pactffi_pact_handle_get_sync_message_iter(pact: PactFfi.PactHandle): PactSyncMessageIterator;

  /** /data/input/pact.h#L3592 */
  export declare function pactffi_pact_handle_get_sync_http_iter(pact: PactFfi.PactHandle): PactSyncHttpIterator;

  /** /data/input/pact.h#L3603 */
  export declare function pactffi_new_message_pact(consumer_name: number, provider_name: number): PactFfi.MessagePactHandle;

  /** /data/input/pact.h#L3613 */
  export declare function pactffi_new_message(pact: PactFfi.MessagePactHandle, description: number): PactFfi.MessageHandle;

  /** /data/input/pact.h#L3620 */
  export declare function pactffi_message_expects_to_receive(message: PactFfi.MessageHandle, description: number): void;

  /** /data/input/pact.h#L3627 */
  export declare function pactffi_message_given(message: PactFfi.MessageHandle, description: number): void;

  /** /data/input/pact.h#L3636 */
  export declare function pactffi_message_given_with_param(message: PactFfi.MessageHandle, description: number, name: number, value: number): void;

  /** /data/input/pact.h#L3655 */
  export declare function pactffi_message_with_contents(message_handle: PactFfi.MessageHandle, content_type: number, body: number, size: number): void;

  /** /data/input/pact.h#L3666 */
  export declare function pactffi_message_with_metadata(message_handle: PactFfi.MessageHandle, key: number, value: number): void;

  /** /data/input/pact.h#L3676 */
  export declare function pactffi_message_reify(message_handle: PactFfi.MessageHandle): number;

  /** /data/input/pact.h#L3698 */
  export declare function pactffi_write_message_pact_file(pact: PactFfi.MessagePactHandle, directory: number, overwrite: number): number;

  /** /data/input/pact.h#L3710 */
  export declare function pactffi_with_message_pact_metadata(pact: PactFfi.MessagePactHandle, namespace_: number, name: number, value: number): void;

  /** /data/input/pact.h#L3740 */
  export declare function pactffi_pact_handle_write_file(pact: PactFfi.PactHandle, directory: number, overwrite: number): number;

  /** /data/input/pact.h#L3749 */
  export declare function pactffi_new_async_message(pact: PactFfi.PactHandle, description: number): PactFfi.MessageHandle;

  /** /data/input/pact.h#L3761 */
  export declare function pactffi_free_pact_handle(pact: PactFfi.PactHandle): number;

  /** /data/input/pact.h#L3773 */
  export declare function pactffi_free_message_pact_handle(pact: PactFfi.MessagePactHandle): number;

  /** /data/input/pact.h#L3795 */
  export declare function pactffi_verify(args: number): number;

  /** /data/input/pact.h#L3812 */
  export declare function pactffi_verifier_new(): VerifierHandle;

  /** /data/input/pact.h#L3826 */
  export declare function pactffi_verifier_new_for_application(name: number, version: number): VerifierHandle;

  /** /data/input/pact.h#L3831 */
  export declare function pactffi_verifier_shutdown(handle: VerifierHandle): void;

  /** /data/input/pact.h#L3843 */
  export declare function pactffi_verifier_set_provider_info(handle: VerifierHandle, name: number, scheme: number, host: number, port: number, path: number): void;

  /** /data/input/pact.h#L3864 */
  export declare function pactffi_verifier_add_provider_transport(handle: VerifierHandle, protocol: number, port: number, path: number, scheme: number): void;

  /** /data/input/pact.h#L3883 */
  export declare function pactffi_verifier_set_filter_info(handle: VerifierHandle, filter_description: number, filter_state: number, filter_no_state: number): void;

  /** /data/input/pact.h#L3904 */
  export declare function pactffi_verifier_set_provider_state(handle: VerifierHandle, url: number, teardown: number, body: number): void;

  /** /data/input/pact.h#L3920 */
  export declare function pactffi_verifier_set_verification_options(handle: VerifierHandle, disable_ssl_verification: number, request_timeout: bigint): number;

  /** /data/input/pact.h#L3935 */
  export declare function pactffi_verifier_set_coloured_output(handle: VerifierHandle, coloured_output: number): number;

  /** /data/input/pact.h#L3949 */
  export declare function pactffi_verifier_set_no_pacts_is_error(handle: VerifierHandle, is_error: number): number;

  /** /data/input/pact.h#L3969 */
  export declare function pactffi_verifier_set_publish_options(handle: VerifierHandle, provider_version: number, build_url: number, provider_tags: number, provider_tags_len: number, provider_branch: number): number;

  /** /data/input/pact.h#L3985 */
  export declare function pactffi_verifier_set_consumer_filters(handle: VerifierHandle, consumer_filters: number, consumer_filters_len: number): void;

  /** /data/input/pact.h#L3997 */
  export declare function pactffi_verifier_add_custom_header(handle: VerifierHandle, header_name: number, header_value: number): void;

  /** /data/input/pact.h#L4010 */
  export declare function pactffi_verifier_add_file_source(handle: VerifierHandle, file: number): void;

  /** /data/input/pact.h#L4022 */
  export declare function pactffi_verifier_add_directory_source(handle: VerifierHandle, directory: number): void;

  /** /data/input/pact.h#L4036 */
  export declare function pactffi_verifier_url_source(handle: VerifierHandle, url: number, username: number, password: number, token: number): void;

  /** /data/input/pact.h#L4055 */
  export declare function pactffi_verifier_broker_source(handle: VerifierHandle, url: number, username: number, password: number, token: number): void;

  /** /data/input/pact.h#L4082 */
  export declare function pactffi_verifier_broker_source_with_selectors(handle: VerifierHandle, url: number, username: number, password: number, token: number, enable_pending: number, include_wip_pacts_since: number, provider_tags: number, provider_tags_len: number, provider_branch: number, consumer_version_selectors: number, consumer_version_selectors_len: number, consumer_version_tags: number, consumer_version_tags_len: number): void;

  /** /data/input/pact.h#L4104 */
  export declare function pactffi_verifier_execute(handle: VerifierHandle): number;

  /** /data/input/pact.h#L4155 */
  export declare function pactffi_verifier_cli_args(): number;

  /** /data/input/pact.h#L4164 */
  export declare function pactffi_verifier_logs(handle: VerifierHandle): number;

  /** /data/input/pact.h#L4173 */
  export declare function pactffi_verifier_logs_for_provider(provider_name: number): number;

  /** /data/input/pact.h#L4184 */
  export declare function pactffi_verifier_output(handle: VerifierHandle, strip_ansi: number): number;

  /** /data/input/pact.h#L4192 */
  export declare function pactffi_verifier_json(handle: VerifierHandle): number;

  /** /data/input/pact.h#L4220 */
  export declare function pactffi_using_plugin(pact: PactFfi.PactHandle, plugin_name: number, plugin_version: number): number;

  /** /data/input/pact.h#L4228 */
  export declare function pactffi_cleanup_plugins(pact: PactFfi.PactHandle): void;

  /** /data/input/pact.h#L4258 */
  export declare function pactffi_interaction_contents(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: number, contents: number): number;

  /** /data/input/pact.h#L4279 */
  export declare function pactffi_matches_string_value(matching_rule: MatchingRule, expected_value: number, actual_value: number, cascaded: number): number;

  /** /data/input/pact.h#L4299 */
  export declare function pactffi_matches_u64_value(matching_rule: MatchingRule, expected_value: number, actual_value: number, cascaded: number): number;

  /** /data/input/pact.h#L4319 */
  export declare function pactffi_matches_i64_value(matching_rule: MatchingRule, expected_value: number, actual_value: number, cascaded: number): number;

  /** /data/input/pact.h#L4339 */
  export declare function pactffi_matches_f64_value(matching_rule: MatchingRule, expected_value: bigint, actual_value: bigint, cascaded: number): number;

  /** /data/input/pact.h#L4359 */
  export declare function pactffi_matches_bool_value(matching_rule: MatchingRule, expected_value: number, actual_value: number, cascaded: number): number;

  /** /data/input/pact.h#L4383 */
  export declare function pactffi_matches_binary_value(matching_rule: MatchingRule, expected_value: number, expected_value_len: number, actual_value: number, actual_value_len: number, cascaded: number): number;

  /** /data/input/pact.h#L4406 */
  export declare function pactffi_matches_json_value(matching_rule: MatchingRule, expected_value: number, actual_value: number, cascaded: number): number;

  export declare function $$close(): void;
}
