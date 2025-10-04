-- Enable extensions
create extension if not exists vector;
create extension if not exists "uuid-ossp";

-- Create documents table with metadata
create table if not exists documents (
  id uuid primary key default uuid_generate_v4(),
  content text not null,
  embedding vector(3072) not null,
  metadata jsonb not null
);

-- Optional: index for faster lookups by metadata->>'source'
create index if not exists documents_metadata_source_idx
on documents ((metadata->>'source'));

-- Create match_documents function
create or replace function match_documents(
  query_embedding vector(3072),
  match_threshold float,
  match_count int
)
returns table (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
language sql stable
as $$
  select
    id,
    content,
    metadata,
    1 - (d.embedding <=> query_embedding) as similarity
  from documents d
  where 1 - (d.embedding <=> query_embedding) > match_threshold
  order by d.embedding <=> query_embedding
  limit match_count;
$$;
