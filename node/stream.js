import { read } from 'fs';
import Stream from 'stream';
const readableStream = new Stream.Readable();

readableStream.push('ping');
readableStream.push('pong');