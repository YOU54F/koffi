import { TypeSpec } from 'koffi';
import { PactFfi } from './types';
export type PactFfiMethods = keyof typeof PactFfi;
export const PactFfi_SYMBOLS = {
//   malloc: {
//     name: "malloc",
//     arguments: ["usize"],
//     result: "pointer"
//   },
//   calloc: {
//     name: "calloc",
//     arguments: ["usize", "usize"],
//     result: "pointer"
//   },
//   realloc: {
//     name: "realloc",
//     arguments: ["pointer", "usize"],
//     result: "pointer"
//   },
//   free: {
//     name: "free",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   posix_memalign: {
//     name: "posix_memalign",
//     arguments: ["pointer", "usize", "usize"],
//     result: "i32"
//   },
//   abort: {
//     name: "abort",
//     arguments: [],
//     result: "void"
//   },
//   getenv: {
//     name: "getenv",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   realpath: {
//     name: "realpath",
//     arguments: ["pointer", "pointer"],
//     result: "pointer"
//   },
  pactffi_version: {
    name: "pactffi_version",
    arguments: [],
    result: "string"
  },
//   pactffi_init: {
//     name: "pactffi_init",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_init_with_log_level: {
//     name: "pactffi_init_with_log_level",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_enable_ansi_support: {
//     name: "pactffi_enable_ansi_support",
//     arguments: [],
//     result: "void"
//   },
//   pactffi_log_message: {
//     name: "pactffi_log_message",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_match_message: {
//     name: "pactffi_match_message",
//     arguments: ["pointer", "pointer"],
//     result: "pointer"
//   },
//   pactffi_mismatches_get_iter: {
//     name: "pactffi_mismatches_get_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_mismatches_delete: {
//     name: "pactffi_mismatches_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_mismatches_iter_next: {
//     name: "pactffi_mismatches_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_mismatches_iter_delete: {
//     name: "pactffi_mismatches_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_mismatch_to_json: {
//     name: "pactffi_mismatch_to_json",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_mismatch_type: {
//     name: "pactffi_mismatch_type",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_mismatch_summary: {
//     name: "pactffi_mismatch_summary",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_mismatch_description: {
//     name: "pactffi_mismatch_description",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_mismatch_ansi_description: {
//     name: "pactffi_mismatch_ansi_description",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_get_error_message: {
//     name: "pactffi_get_error_message",
//     arguments: ["pointer", "i32"],
//     result: "i32"
//   },
//   pactffi_log_to_stdout: {
//     name: "pactffi_log_to_stdout",
//     arguments: ["i32"],
//     result: "i32"
//   },
//   pactffi_log_to_stderr: {
//     name: "pactffi_log_to_stderr",
//     arguments: ["i32"],
//     result: "i32"
//   },
//   pactffi_log_to_file: {
//     name: "pactffi_log_to_file",
//     arguments: ["pointer", "i32"],
//     result: "i32"
//   },
//   pactffi_log_to_buffer: {
//     name: "pactffi_log_to_buffer",
//     arguments: ["i32"],
//     result: "i32"
//   },
//   pactffi_logger_init: {
//     name: "pactffi_logger_init",
//     arguments: [],
//     result: "void"
//   },
//   pactffi_logger_attach_sink: {
//     name: "pactffi_logger_attach_sink",
//     arguments: ["pointer", "i32"],
//     result: "i32"
//   },
//   pactffi_logger_apply: {
//     name: "pactffi_logger_apply",
//     arguments: [],
//     result: "i32"
//   },
//   pactffi_fetch_log_buffer: {
//     name: "pactffi_fetch_log_buffer",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_parse_pact_json: {
//     name: "pactffi_parse_pact_json",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_model_delete: {
//     name: "pactffi_pact_model_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_pact_model_interaction_iterator: {
//     name: "pactffi_pact_model_interaction_iterator",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_spec_version: {
//     name: "pactffi_pact_spec_version",
//     arguments: ["pointer"],
//     result: "i32"
//   },
//   pactffi_pact_interaction_delete: {
//     name: "pactffi_pact_interaction_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_async_message_new: {
//     name: "pactffi_async_message_new",
//     arguments: [],
//     result: "pointer"
//   },
//   pactffi_async_message_delete: {
//     name: "pactffi_async_message_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_async_message_get_contents: {
//     name: "pactffi_async_message_get_contents",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_async_message_get_contents_str: {
//     name: "pactffi_async_message_get_contents_str",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_async_message_set_contents_str: {
//     name: "pactffi_async_message_set_contents_str",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_async_message_get_contents_length: {
//     name: "pactffi_async_message_get_contents_length",
//     arguments: ["pointer"],
//     result: "usize"
//   },
//   pactffi_async_message_get_contents_bin: {
//     name: "pactffi_async_message_get_contents_bin",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_async_message_set_contents_bin: {
//     name: "pactffi_async_message_set_contents_bin",
//     arguments: ["pointer", "pointer", "usize", "pointer"],
//     result: "void"
//   },
//   pactffi_async_message_get_description: {
//     name: "pactffi_async_message_get_description",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_async_message_set_description: {
//     name: "pactffi_async_message_set_description",
//     arguments: ["pointer", "pointer"],
//     result: "i32"
//   },
//   pactffi_async_message_get_provider_state: {
//     name: "pactffi_async_message_get_provider_state",
//     arguments: ["pointer", "u32"],
//     result: "pointer"
//   },
//   pactffi_async_message_get_provider_state_iter: {
//     name: "pactffi_async_message_get_provider_state_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_consumer_get_name: {
//     name: "pactffi_consumer_get_name",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_get_consumer: {
//     name: "pactffi_pact_get_consumer",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_consumer_delete: {
//     name: "pactffi_pact_consumer_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_contents_get_contents_str: {
//     name: "pactffi_message_contents_get_contents_str",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_contents_set_contents_str: {
//     name: "pactffi_message_contents_set_contents_str",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_message_contents_get_contents_length: {
//     name: "pactffi_message_contents_get_contents_length",
//     arguments: ["pointer"],
//     result: "usize"
//   },
//   pactffi_message_contents_get_contents_bin: {
//     name: "pactffi_message_contents_get_contents_bin",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_contents_set_contents_bin: {
//     name: "pactffi_message_contents_set_contents_bin",
//     arguments: ["pointer", "pointer", "usize", "pointer"],
//     result: "void"
//   },
//   pactffi_message_contents_get_metadata_iter: {
//     name: "pactffi_message_contents_get_metadata_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_contents_get_matching_rule_iter: {
//     name: "pactffi_message_contents_get_matching_rule_iter",
//     arguments: ["pointer", "i32"],
//     result: "pointer"
//   },
//   pactffi_request_contents_get_matching_rule_iter: {
//     name: "pactffi_request_contents_get_matching_rule_iter",
//     arguments: ["pointer", "i32"],
//     result: "pointer"
//   },
//   pactffi_response_contents_get_matching_rule_iter: {
//     name: "pactffi_response_contents_get_matching_rule_iter",
//     arguments: ["pointer", "i32"],
//     result: "pointer"
//   },
//   pactffi_message_contents_get_generators_iter: {
//     name: "pactffi_message_contents_get_generators_iter",
//     arguments: ["pointer", "i32"],
//     result: "pointer"
//   },
//   pactffi_request_contents_get_generators_iter: {
//     name: "pactffi_request_contents_get_generators_iter",
//     arguments: ["pointer", "i32"],
//     result: "pointer"
//   },
//   pactffi_response_contents_get_generators_iter: {
//     name: "pactffi_response_contents_get_generators_iter",
//     arguments: ["pointer", "i32"],
//     result: "pointer"
//   },
//   pactffi_parse_matcher_definition: {
//     name: "pactffi_parse_matcher_definition",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matcher_definition_error: {
//     name: "pactffi_matcher_definition_error",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matcher_definition_value: {
//     name: "pactffi_matcher_definition_value",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matcher_definition_delete: {
//     name: "pactffi_matcher_definition_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_matcher_definition_generator: {
//     name: "pactffi_matcher_definition_generator",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matcher_definition_value_type: {
//     name: "pactffi_matcher_definition_value_type",
//     arguments: ["pointer"],
//     result: "i32"
//   },
//   pactffi_matching_rule_iter_delete: {
//     name: "pactffi_matching_rule_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_matcher_definition_iter: {
//     name: "pactffi_matcher_definition_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matching_rule_iter_next: {
//     name: "pactffi_matching_rule_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matching_rule_id: {
//     name: "pactffi_matching_rule_id",
//     arguments: ["pointer"],
//     result: "u16"
//   },
//   pactffi_matching_rule_value: {
//     name: "pactffi_matching_rule_value",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matching_rule_pointer: {
//     name: "pactffi_matching_rule_pointer",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matching_rule_reference_name: {
//     name: "pactffi_matching_rule_reference_name",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_validate_datetime: {
//     name: "pactffi_validate_datetime",
//     arguments: ["pointer", "pointer"],
//     result: "i32"
//   },
//   pactffi_generator_to_json: {
//     name: "pactffi_generator_to_json",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_generator_generate_string: {
//     name: "pactffi_generator_generate_string",
//     arguments: ["pointer", "pointer"],
//     result: "pointer"
//   },
//   pactffi_generator_generate_integer: {
//     name: "pactffi_generator_generate_integer",
//     arguments: ["pointer", "pointer"],
//     result: "u16"
//   },
//   pactffi_generators_iter_delete: {
//     name: "pactffi_generators_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_generators_iter_next: {
//     name: "pactffi_generators_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_generators_iter_pair_delete: {
//     name: "pactffi_generators_iter_pair_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_sync_http_new: {
//     name: "pactffi_sync_http_new",
//     arguments: [],
//     result: "pointer"
//   },
//   pactffi_sync_http_delete: {
//     name: "pactffi_sync_http_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_sync_http_get_request: {
//     name: "pactffi_sync_http_get_request",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_http_get_request_contents: {
//     name: "pactffi_sync_http_get_request_contents",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_http_set_request_contents: {
//     name: "pactffi_sync_http_set_request_contents",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_sync_http_get_request_contents_length: {
//     name: "pactffi_sync_http_get_request_contents_length",
//     arguments: ["pointer"],
//     result: "usize"
//   },
//   pactffi_sync_http_get_request_contents_bin: {
//     name: "pactffi_sync_http_get_request_contents_bin",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_http_set_request_contents_bin: {
//     name: "pactffi_sync_http_set_request_contents_bin",
//     arguments: ["pointer", "pointer", "usize", "pointer"],
//     result: "void"
//   },
//   pactffi_sync_http_get_response: {
//     name: "pactffi_sync_http_get_response",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_http_get_response_contents: {
//     name: "pactffi_sync_http_get_response_contents",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_http_set_response_contents: {
//     name: "pactffi_sync_http_set_response_contents",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_sync_http_get_response_contents_length: {
//     name: "pactffi_sync_http_get_response_contents_length",
//     arguments: ["pointer"],
//     result: "usize"
//   },
//   pactffi_sync_http_get_response_contents_bin: {
//     name: "pactffi_sync_http_get_response_contents_bin",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_http_set_response_contents_bin: {
//     name: "pactffi_sync_http_set_response_contents_bin",
//     arguments: ["pointer", "pointer", "usize", "pointer"],
//     result: "void"
//   },
//   pactffi_sync_http_get_description: {
//     name: "pactffi_sync_http_get_description",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_http_set_description: {
//     name: "pactffi_sync_http_set_description",
//     arguments: ["pointer", "pointer"],
//     result: "i32"
//   },
//   pactffi_sync_http_get_provider_state: {
//     name: "pactffi_sync_http_get_provider_state",
//     arguments: ["pointer", "u32"],
//     result: "pointer"
//   },
//   pactffi_sync_http_get_provider_state_iter: {
//     name: "pactffi_sync_http_get_provider_state_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_interaction_as_synchronous_http: {
//     name: "pactffi_pact_interaction_as_synchronous_http",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_interaction_as_message: {
//     name: "pactffi_pact_interaction_as_message",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_interaction_as_asynchronous_message: {
//     name: "pactffi_pact_interaction_as_asynchronous_message",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_interaction_as_synchronous_message: {
//     name: "pactffi_pact_interaction_as_synchronous_message",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_message_iter_delete: {
//     name: "pactffi_pact_message_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_pact_message_iter_next: {
//     name: "pactffi_pact_message_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_sync_message_iter_next: {
//     name: "pactffi_pact_sync_message_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_sync_message_iter_delete: {
//     name: "pactffi_pact_sync_message_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_pact_sync_http_iter_next: {
//     name: "pactffi_pact_sync_http_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_sync_http_iter_delete: {
//     name: "pactffi_pact_sync_http_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_pact_interaction_iter_next: {
//     name: "pactffi_pact_interaction_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_interaction_iter_delete: {
//     name: "pactffi_pact_interaction_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_matching_rule_to_json: {
//     name: "pactffi_matching_rule_to_json",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matching_rules_iter_delete: {
//     name: "pactffi_matching_rules_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_matching_rules_iter_next: {
//     name: "pactffi_matching_rules_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_matching_rules_iter_pair_delete: {
//     name: "pactffi_matching_rules_iter_pair_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_new: {
//     name: "pactffi_message_new",
//     arguments: [],
//     result: "pointer"
//   },
//   pactffi_message_new_from_json: {
//     name: "pactffi_message_new_from_json",
//     arguments: ["u32", "pointer", "i32"],
//     result: "pointer"
//   },
//   pactffi_message_new_from_body: {
//     name: "pactffi_message_new_from_body",
//     arguments: ["pointer", "pointer"],
//     result: "pointer"
//   },
//   pactffi_message_delete: {
//     name: "pactffi_message_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_get_contents: {
//     name: "pactffi_message_get_contents",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_set_contents: {
//     name: "pactffi_message_set_contents",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_message_get_contents_length: {
//     name: "pactffi_message_get_contents_length",
//     arguments: ["pointer"],
//     result: "usize"
//   },
//   pactffi_message_get_contents_bin: {
//     name: "pactffi_message_get_contents_bin",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_set_contents_bin: {
//     name: "pactffi_message_set_contents_bin",
//     arguments: ["pointer", "pointer", "usize", "pointer"],
//     result: "void"
//   },
//   pactffi_message_get_description: {
//     name: "pactffi_message_get_description",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_set_description: {
//     name: "pactffi_message_set_description",
//     arguments: ["pointer", "pointer"],
//     result: "i32"
//   },
//   pactffi_message_get_provider_state: {
//     name: "pactffi_message_get_provider_state",
//     arguments: ["pointer", "u32"],
//     result: "pointer"
//   },
//   pactffi_message_get_provider_state_iter: {
//     name: "pactffi_message_get_provider_state_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_provider_state_iter_next: {
//     name: "pactffi_provider_state_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_provider_state_iter_delete: {
//     name: "pactffi_provider_state_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_find_metadata: {
//     name: "pactffi_message_find_metadata",
//     arguments: ["pointer", "pointer"],
//     result: "pointer"
//   },
//   pactffi_message_insert_metadata: {
//     name: "pactffi_message_insert_metadata",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "i32"
//   },
//   pactffi_message_metadata_iter_next: {
//     name: "pactffi_message_metadata_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_get_metadata_iter: {
//     name: "pactffi_message_get_metadata_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_metadata_iter_delete: {
//     name: "pactffi_message_metadata_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_metadata_pair_delete: {
//     name: "pactffi_message_metadata_pair_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_pact_new_from_json: {
//     name: "pactffi_message_pact_new_from_json",
//     arguments: ["pointer", "pointer"],
//     result: "pointer"
//   },
//   pactffi_message_pact_delete: {
//     name: "pactffi_message_pact_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_pact_get_consumer: {
//     name: "pactffi_message_pact_get_consumer",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_pact_get_provider: {
//     name: "pactffi_message_pact_get_provider",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_pact_get_message_iter: {
//     name: "pactffi_message_pact_get_message_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_pact_message_iter_next: {
//     name: "pactffi_message_pact_message_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_pact_message_iter_delete: {
//     name: "pactffi_message_pact_message_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_pact_find_metadata: {
//     name: "pactffi_message_pact_find_metadata",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "pointer"
//   },
//   pactffi_message_pact_get_metadata_iter: {
//     name: "pactffi_message_pact_get_metadata_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_pact_metadata_iter_next: {
//     name: "pactffi_message_pact_metadata_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_message_pact_metadata_iter_delete: {
//     name: "pactffi_message_pact_metadata_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_message_pact_metadata_triple_delete: {
//     name: "pactffi_message_pact_metadata_triple_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_provider_get_name: {
//     name: "pactffi_provider_get_name",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_get_provider: {
//     name: "pactffi_pact_get_provider",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_provider_delete: {
//     name: "pactffi_pact_provider_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_provider_state_get_name: {
//     name: "pactffi_provider_state_get_name",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_provider_state_get_param_iter: {
//     name: "pactffi_provider_state_get_param_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_provider_state_param_iter_next: {
//     name: "pactffi_provider_state_param_iter_next",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_provider_state_delete: {
//     name: "pactffi_provider_state_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_provider_state_param_iter_delete: {
//     name: "pactffi_provider_state_param_iter_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_provider_state_param_pair_delete: {
//     name: "pactffi_provider_state_param_pair_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_sync_message_new: {
//     name: "pactffi_sync_message_new",
//     arguments: [],
//     result: "pointer"
//   },
//   pactffi_sync_message_delete: {
//     name: "pactffi_sync_message_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_sync_message_get_request_contents_str: {
//     name: "pactffi_sync_message_get_request_contents_str",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_message_set_request_contents_str: {
//     name: "pactffi_sync_message_set_request_contents_str",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_sync_message_get_request_contents_length: {
//     name: "pactffi_sync_message_get_request_contents_length",
//     arguments: ["pointer"],
//     result: "usize"
//   },
//   pactffi_sync_message_get_request_contents_bin: {
//     name: "pactffi_sync_message_get_request_contents_bin",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_message_set_request_contents_bin: {
//     name: "pactffi_sync_message_set_request_contents_bin",
//     arguments: ["pointer", "pointer", "usize", "pointer"],
//     result: "void"
//   },
//   pactffi_sync_message_get_request_contents: {
//     name: "pactffi_sync_message_get_request_contents",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_message_get_number_responses: {
//     name: "pactffi_sync_message_get_number_responses",
//     arguments: ["pointer"],
//     result: "usize"
//   },
//   pactffi_sync_message_get_response_contents_str: {
//     name: "pactffi_sync_message_get_response_contents_str",
//     arguments: ["pointer", "usize"],
//     result: "pointer"
//   },
//   pactffi_sync_message_set_response_contents_str: {
//     name: "pactffi_sync_message_set_response_contents_str",
//     arguments: ["pointer", "usize", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_sync_message_get_response_contents_length: {
//     name: "pactffi_sync_message_get_response_contents_length",
//     arguments: ["pointer", "usize"],
//     result: "usize"
//   },
//   pactffi_sync_message_get_response_contents_bin: {
//     name: "pactffi_sync_message_get_response_contents_bin",
//     arguments: ["pointer", "usize"],
//     result: "pointer"
//   },
//   pactffi_sync_message_set_response_contents_bin: {
//     name: "pactffi_sync_message_set_response_contents_bin",
//     arguments: ["pointer", "usize", "pointer", "usize", "pointer"],
//     result: "void"
//   },
//   pactffi_sync_message_get_response_contents: {
//     name: "pactffi_sync_message_get_response_contents",
//     arguments: ["pointer", "usize"],
//     result: "pointer"
//   },
//   pactffi_sync_message_get_description: {
//     name: "pactffi_sync_message_get_description",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_sync_message_set_description: {
//     name: "pactffi_sync_message_set_description",
//     arguments: ["pointer", "pointer"],
//     result: "i32"
//   },
//   pactffi_sync_message_get_provider_state: {
//     name: "pactffi_sync_message_get_provider_state",
//     arguments: ["pointer", "u32"],
//     result: "pointer"
//   },
//   pactffi_sync_message_get_provider_state_iter: {
//     name: "pactffi_sync_message_get_provider_state_iter",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_string_delete: {
//     name: "pactffi_string_delete",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_create_mock_server: {
//     name: "pactffi_create_mock_server",
//     arguments: ["pointer", "pointer", "u8"],
//     result: "i32"
//   },
//   pactffi_get_tls_ca_certificate: {
//     name: "pactffi_get_tls_ca_certificate",
//     arguments: [],
//     result: "pointer"
//   },
//   pactffi_create_mock_server_for_pact: {
//     name: "pactffi_create_mock_server_for_pact",
//     arguments: ["u16", "pointer", "u8"],
//     result: "i32"
//   },
//   pactffi_create_mock_server_for_transport: {
//     name: "pactffi_create_mock_server_for_transport",
//     arguments: ["u16", "pointer", "u16", "pointer", "pointer"],
//     result: "i32"
//   },
//   pactffi_mock_server_matched: {
//     name: "pactffi_mock_server_matched",
//     arguments: ["i32"],
//     result: "u8"
//   },
//   pactffi_mock_server_mismatches: {
//     name: "pactffi_mock_server_mismatches",
//     arguments: ["i32"],
//     result: "pointer"
//   },
//   pactffi_cleanup_mock_server: {
//     name: "pactffi_cleanup_mock_server",
//     arguments: ["i32"],
//     result: "u8"
//   },
//   pactffi_write_pact_file: {
//     name: "pactffi_write_pact_file",
//     arguments: ["i32", "pointer", "u8"],
//     result: "i32"
//   },
//   pactffi_mock_server_logs: {
//     name: "pactffi_mock_server_logs",
//     arguments: ["i32"],
//     result: "pointer"
//   },
//   pactffi_generate_datetime_string: {
//     name: "pactffi_generate_datetime_string",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_check_regex: {
//     name: "pactffi_check_regex",
//     arguments: ["pointer", "pointer"],
//     result: "u8"
//   },
//   pactffi_generate_regex_value: {
//     name: "pactffi_generate_regex_value",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_free_string: {
//     name: "pactffi_free_string",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_new_pact: {
//     name: "pactffi_new_pact",
//     arguments: ["pointer", "pointer"],
//     result: "u16"
//   },
//   pactffi_new_interaction: {
//     name: "pactffi_new_interaction",
//     arguments: ["u16", "pointer"],
//     result: "u32"
//   },
//   pactffi_new_message_interaction: {
//     name: "pactffi_new_message_interaction",
//     arguments: ["u16", "pointer"],
//     result: "u32"
//   },
//   pactffi_new_sync_message_interaction: {
//     name: "pactffi_new_sync_message_interaction",
//     arguments: ["u16", "pointer"],
//     result: "u32"
//   },
//   pactffi_upon_receiving: {
//     name: "pactffi_upon_receiving",
//     arguments: ["u32", "pointer"],
//     result: "u8"
//   },
//   pactffi_given: {
//     name: "pactffi_given",
//     arguments: ["u32", "pointer"],
//     result: "u8"
//   },
//   pactffi_interaction_test_name: {
//     name: "pactffi_interaction_test_name",
//     arguments: ["u32", "pointer"],
//     result: "u32"
//   },
//   pactffi_given_with_param: {
//     name: "pactffi_given_with_param",
//     arguments: ["u32", "pointer", "pointer", "pointer"],
//     result: "u8"
//   },
//   pactffi_with_request: {
//     name: "pactffi_with_request",
//     arguments: ["u32", "pointer", "pointer"],
//     result: "u8"
//   },
//   pactffi_with_query_parameter: {
//     name: "pactffi_with_query_parameter",
//     arguments: ["u32", "pointer", "usize", "pointer"],
//     result: "u8"
//   },
//   pactffi_with_query_parameter_v2: {
//     name: "pactffi_with_query_parameter_v2",
//     arguments: ["u32", "pointer", "usize", "pointer"],
//     result: "u8"
//   },
//   pactffi_with_specification: {
//     name: "pactffi_with_specification",
//     arguments: ["u16", "i32"],
//     result: "u8"
//   },
//   pactffi_with_pact_metadata: {
//     name: "pactffi_with_pact_metadata",
//     arguments: ["u16", "pointer", "pointer", "pointer"],
//     result: "u8"
//   },
//   pactffi_with_header: {
//     name: "pactffi_with_header",
//     arguments: ["u32", "i32", "pointer", "usize", "pointer"],
//     result: "u8"
//   },
//   pactffi_with_header_v2: {
//     name: "pactffi_with_header_v2",
//     arguments: ["u32", "i32", "pointer", "usize", "pointer"],
//     result: "u8"
//   },
//   pactffi_response_status: {
//     name: "pactffi_response_status",
//     arguments: ["u32", "u16"],
//     result: "u8"
//   },
//   pactffi_with_body: {
//     name: "pactffi_with_body",
//     arguments: ["u32", "i32", "pointer", "pointer"],
//     result: "u8"
//   },
//   pactffi_with_binary_file: {
//     name: "pactffi_with_binary_file",
//     arguments: ["u32", "i32", "pointer", "pointer", "usize"],
//     result: "u8"
//   },
//   pactffi_with_multipart_file: {
//     name: "pactffi_with_multipart_file",
//     arguments: ["u32", "i32", "pointer", "pointer", "pointer"],
//     result: "pointer"
//   },
//   pactffi_pact_handle_get_message_iter: {
//     name: "pactffi_pact_handle_get_message_iter",
//     arguments: ["u16"],
//     result: "pointer"
//   },
//   pactffi_pact_handle_get_sync_message_iter: {
//     name: "pactffi_pact_handle_get_sync_message_iter",
//     arguments: ["u16"],
//     result: "pointer"
//   },
//   pactffi_pact_handle_get_sync_http_iter: {
//     name: "pactffi_pact_handle_get_sync_http_iter",
//     arguments: ["u16"],
//     result: "pointer"
//   },
//   pactffi_new_message_pact: {
//     name: "pactffi_new_message_pact",
//     arguments: ["pointer", "pointer"],
//     result: "u16"
//   },
//   pactffi_new_message: {
//     name: "pactffi_new_message",
//     arguments: ["u16", "pointer"],
//     result: "u32"
//   },
//   pactffi_message_expects_to_receive: {
//     name: "pactffi_message_expects_to_receive",
//     arguments: ["u32", "pointer"],
//     result: "void"
//   },
//   pactffi_message_given: {
//     name: "pactffi_message_given",
//     arguments: ["u32", "pointer"],
//     result: "void"
//   },
//   pactffi_message_given_with_param: {
//     name: "pactffi_message_given_with_param",
//     arguments: ["u32", "pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_message_with_contents: {
//     name: "pactffi_message_with_contents",
//     arguments: ["u32", "pointer", "pointer", "usize"],
//     result: "void"
//   },
//   pactffi_message_with_metadata: {
//     name: "pactffi_message_with_metadata",
//     arguments: ["u32", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_message_reify: {
//     name: "pactffi_message_reify",
//     arguments: ["u32"],
//     result: "pointer"
//   },
//   pactffi_write_message_pact_file: {
//     name: "pactffi_write_message_pact_file",
//     arguments: ["u16", "pointer", "u8"],
//     result: "i32"
//   },
//   pactffi_with_message_pact_metadata: {
//     name: "pactffi_with_message_pact_metadata",
//     arguments: ["u16", "pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_pact_handle_write_file: {
//     name: "pactffi_pact_handle_write_file",
//     arguments: ["u16", "pointer", "u8"],
//     result: "i32"
//   },
//   pactffi_new_async_message: {
//     name: "pactffi_new_async_message",
//     arguments: ["u16", "pointer"],
//     result: "u32"
//   },
//   pactffi_free_pact_handle: {
//     name: "pactffi_free_pact_handle",
//     arguments: ["u16"],
//     result: "u32"
//   },
//   pactffi_free_message_pact_handle: {
//     name: "pactffi_free_message_pact_handle",
//     arguments: ["u16"],
//     result: "u32"
//   },
//   pactffi_verify: {
//     name: "pactffi_verify",
//     arguments: ["pointer"],
//     result: "i32"
//   },
//   pactffi_verifier_new: {
//     name: "pactffi_verifier_new",
//     arguments: [],
//     result: "pointer"
//   },
//   pactffi_verifier_new_for_application: {
//     name: "pactffi_verifier_new_for_application",
//     arguments: ["pointer", "pointer"],
//     result: "pointer"
//   },
//   pactffi_verifier_shutdown: {
//     name: "pactffi_verifier_shutdown",
//     arguments: ["pointer"],
//     result: "void"
//   },
//   pactffi_verifier_set_provider_info: {
//     name: "pactffi_verifier_set_provider_info",
//     arguments: ["pointer", "pointer", "pointer", "pointer", "u16", "pointer"],
//     result: "void"
//   },
//   pactffi_verifier_add_provider_transport: {
//     name: "pactffi_verifier_add_provider_transport",
//     arguments: ["pointer", "pointer", "u16", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_verifier_set_filter_info: {
//     name: "pactffi_verifier_set_filter_info",
//     arguments: ["pointer", "pointer", "pointer", "u8"],
//     result: "void"
//   },
//   pactffi_verifier_set_provider_state: {
//     name: "pactffi_verifier_set_provider_state",
//     arguments: ["pointer", "pointer", "u8", "u8"],
//     result: "void"
//   },
//   pactffi_verifier_set_verification_options: {
//     name: "pactffi_verifier_set_verification_options",
//     arguments: ["pointer", "u8", "u64"],
//     result: "i32"
//   },
//   pactffi_verifier_set_coloured_output: {
//     name: "pactffi_verifier_set_coloured_output",
//     arguments: ["pointer", "u8"],
//     result: "i32"
//   },
//   pactffi_verifier_set_no_pacts_is_error: {
//     name: "pactffi_verifier_set_no_pacts_is_error",
//     arguments: ["pointer", "u8"],
//     result: "i32"
//   },
//   pactffi_verifier_set_publish_options: {
//     name: "pactffi_verifier_set_publish_options",
//     arguments: ["pointer", "pointer", "pointer", "pointer", "u16", "pointer"],
//     result: "i32"
//   },
//   pactffi_verifier_set_consumer_filters: {
//     name: "pactffi_verifier_set_consumer_filters",
//     arguments: ["pointer", "pointer", "u16"],
//     result: "void"
//   },
//   pactffi_verifier_add_custom_header: {
//     name: "pactffi_verifier_add_custom_header",
//     arguments: ["pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_verifier_add_file_source: {
//     name: "pactffi_verifier_add_file_source",
//     arguments: ["pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_verifier_add_directory_source: {
//     name: "pactffi_verifier_add_directory_source",
//     arguments: ["pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_verifier_url_source: {
//     name: "pactffi_verifier_url_source",
//     arguments: ["pointer", "pointer", "pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_verifier_broker_source: {
//     name: "pactffi_verifier_broker_source",
//     arguments: ["pointer", "pointer", "pointer", "pointer", "pointer"],
//     result: "void"
//   },
//   pactffi_verifier_broker_source_with_selectors: {
//     name: "pactffi_verifier_broker_source_with_selectors",
//     arguments: ["pointer", "pointer", "pointer", "pointer", "pointer", "u8", "pointer", "pointer", "u16", "pointer", "pointer", "u16", "pointer", "u16"],
//     result: "void"
//   },
//   pactffi_verifier_execute: {
//     name: "pactffi_verifier_execute",
//     arguments: ["pointer"],
//     result: "i32"
//   },
//   pactffi_verifier_cli_args: {
//     name: "pactffi_verifier_cli_args",
//     arguments: [],
//     result: "pointer"
//   },
//   pactffi_verifier_logs: {
//     name: "pactffi_verifier_logs",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_verifier_logs_for_provider: {
//     name: "pactffi_verifier_logs_for_provider",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_verifier_output: {
//     name: "pactffi_verifier_output",
//     arguments: ["pointer", "u8"],
//     result: "pointer"
//   },
//   pactffi_verifier_json: {
//     name: "pactffi_verifier_json",
//     arguments: ["pointer"],
//     result: "pointer"
//   },
//   pactffi_using_plugin: {
//     name: "pactffi_using_plugin",
//     arguments: ["u16", "pointer", "pointer"],
//     result: "u32"
//   },
//   pactffi_cleanup_plugins: {
//     name: "pactffi_cleanup_plugins",
//     arguments: ["u16"],
//     result: "void"
//   },
//   pactffi_interaction_contents: {
//     name: "pactffi_interaction_contents",
//     arguments: ["u32", "i32", "pointer", "pointer"],
//     result: "u32"
//   },
//   pactffi_matches_string_value: {
//     name: "pactffi_matches_string_value",
//     arguments: ["pointer", "pointer", "pointer", "u8"],
//     result: "pointer"
//   },
//   pactffi_matches_u64_value: {
//     name: "pactffi_matches_u64_value",
//     arguments: ["pointer", "u64", "u64", "u8"],
//     result: "pointer"
//   },
//   pactffi_matches_i64_value: {
//     name: "pactffi_matches_i64_value",
//     arguments: ["pointer", "i64", "i64", "u8"],
//     result: "pointer"
//   },
//   pactffi_matches_f64_value: {
//     name: "pactffi_matches_f64_value",
//     arguments: ["pointer", "f64", "f64", "u8"],
//     result: "pointer"
//   },
//   pactffi_matches_bool_value: {
//     name: "pactffi_matches_bool_value",
//     arguments: ["pointer", "u8", "u8", "u8"],
//     result: "pointer"
//   },
//   pactffi_matches_binary_value: {
//     name: "pactffi_matches_binary_value",
//     arguments: ["pointer", "pointer", "u64", "pointer", "u64", "u8"],
//     result: "pointer"
//   },
//   pactffi_matches_json_value: {
//     name: "pactffi_matches_json_value",
//     arguments: ["pointer", "pointer", "pointer", "u8"],
//     result: "pointer"
//   }
} as {
  [key in PactFfiMethods as string]: {
    name: string;
    result: TypeSpec;
    arguments: TypeSpec[];
  };
};
