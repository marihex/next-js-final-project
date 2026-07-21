import { NextRequest, NextResponse } from 'next/server';
import {search} from "@/src/services/api.services";

export async function GET(request: NextRequest) {
   const querySuggestion = request.nextUrl.searchParams.get('query') || '';
   const data = await search(querySuggestion, 1);
   const result = data.results;
    return NextResponse.json(result);
}