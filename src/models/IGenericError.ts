interface IGenericError extends Error {
  response?: { data?: { errors: string[]; error?: string }; status: number };
}

export default IGenericError;
