export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>; // Ensures headers are a key-value pair of strings
}
