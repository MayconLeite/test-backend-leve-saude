import { APIGatewayProxyResult } from 'aws-lambda'

export function success(body: unknown, statusCode = 200): APIGatewayProxyResult {
  return {
    statusCode,
    body: JSON.stringify(body),
  }
}

export function badRequest(message: string): APIGatewayProxyResult {
  return {
    statusCode: 400,
    body: JSON.stringify({ message }),
  }
}
