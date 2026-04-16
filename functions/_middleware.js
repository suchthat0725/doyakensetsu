export async function onRequest(context) {
  const auth = context.request.headers.get("Authorization");
  const USER = "preview";
  const PASS = "dentsuDEJ20260416";
  const expected = "Basic " + btoa(`${USER}:${PASS}`);

  if (auth !== expected) {
    return new Response("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Preview"' },
    });
  }
  return context.next();
}
