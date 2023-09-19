export default interface OAuth2Client {
  authorizationCode(code: string): Promise<void>
}
