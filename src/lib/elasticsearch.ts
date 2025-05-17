import { Client } from '@elastic/elasticsearch';

const elasticsearchUrl = process.env.ELASTICSEARCH_URL || 'http://localhost:9200';

export const elasticsearchClient = new Client({
  node: elasticsearchUrl,
});

// Example function to create an index
export async function createIndex(indexName: string) {
  try {
    const exists = await elasticsearchClient.indices.exists({ index: indexName });
    if (!exists) {
      await elasticsearchClient.indices.create({ index: indexName });
      console.log(`Index ${indexName} created successfully`);
    }
  } catch (error) {
    console.error('Error creating index:', error);
    throw error;
  }
}

// Example function to index a document
export async function indexDocument(indexName: string, document: any) {
  try {
    const response = await elasticsearchClient.index({
      index: indexName,
      document,
    });
    return response;
  } catch (error) {
    console.error('Error indexing document:', error);
    throw error;
  }
}

// Example function to search documents
export async function searchDocuments(indexName: string, query: any) {
  try {
    const response = await elasticsearchClient.search({
      index: indexName,
      query,
    });
    return response;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
}

// Create transactions index with proper mappings
export async function createTransactionsIndex() {
  try {
    const exists = await elasticsearchClient.indices.exists({ index: 'transactions' });
    if (!exists) {
      await elasticsearchClient.indices.create({
        index: 'transactions',
        mappings: {
          properties: {
            amount: { type: 'float' },
            description: { type: 'text' },
            category: { type: 'keyword' },
            type: { type: 'keyword' }, // 'income' or 'expense'
            date: { type: 'date' },
            userId: { type: 'keyword' }
          }
        }
      });
      console.log('Transactions index created successfully');
    }
  } catch (error) {
    console.error('Error creating transactions index:', error);
    throw error;
  }
}

// Add a transaction
export async function addTransaction(transaction: {
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
  date: Date;
  userId: string;
}) {
  try {
    const response = await elasticsearchClient.index({
      index: 'transactions',
      document: transaction
    });
    return response;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
}

// Search transactions
export async function searchTransactions(query: any) {
  try {
    const response = await elasticsearchClient.search({
      index: 'transactions',
      query
    });
    return response;
  } catch (error) {
    console.error('Error searching transactions:', error);
    throw error;
  }
}

// Get transaction statistics
export async function getTransactionStats() {
  try {
    const response = await elasticsearchClient.search({
      index: 'transactions',
      size: 0, // No queremos documentos, solo agregaciones
      aggs: {
        total_income: {
          filter: { term: { type: 'income' } },
          aggs: {
            amount: { sum: { field: 'amount' } }
          }
        },
        total_expenses: {
          filter: { term: { type: 'expense' } },
          aggs: {
            amount: { sum: { field: 'amount' } }
          }
        },
        expenses_by_category: {
          filter: { term: { type: 'expense' } },
          aggs: {
            by_category: {
              terms: { field: 'category' }
            }
          }
        }
      }
    });
    return response;
  } catch (error) {
    console.error('Error getting transaction stats:', error);
    throw error;
  }
} 