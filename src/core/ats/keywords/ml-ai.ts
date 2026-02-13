/**
 * Machine Learning & AI Keywords
 * Skill Area: ml-ai
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const ML_AI_KEYWORDS: KeywordEntry[] = [
  // ML Frameworks & Libraries
  { name: 'TensorFlow', variations: ['tensorflow 2', 'tf', 'tf2'], weight: 2.0, isCore: true },
  { name: 'PyTorch', variations: ['pytorch', 'torch'], weight: 2.0, isCore: true },
  { name: 'Keras', variations: [], weight: 1.7, isCore: false },
  { name: 'Scikit-learn', variations: ['sklearn', 'scikit learn', 'sci-kit learn'], weight: 1.8, isCore: true },
  { name: 'XGBoost', variations: ['xg boost'], weight: 1.6, isCore: false },
  { name: 'LightGBM', variations: ['light gbm', 'lgbm'], weight: 1.5, isCore: false },
  { name: 'CatBoost', variations: ['cat boost'], weight: 1.4, isCore: false },
  { name: 'JAX', variations: ['google jax'], weight: 1.4, isCore: false },
  { name: 'Hugging Face', variations: ['huggingface', 'transformers', 'hf'], weight: 1.8, isCore: false },
  { name: 'OpenCV', variations: ['open cv', 'cv2'], weight: 1.6, isCore: false },
  { name: 'spaCy', variations: ['spacy'], weight: 1.5, isCore: false },
  { name: 'NLTK', variations: ['natural language toolkit'], weight: 1.4, isCore: false },
  { name: 'Gensim', variations: [], weight: 1.2, isCore: false },
  { name: 'fastai', variations: ['fast.ai'], weight: 1.3, isCore: false },
  { name: 'MLlib', variations: ['spark mllib', 'spark ml'], weight: 1.4, isCore: false },
  { name: 'Rapids', variations: ['nvidia rapids', 'cudf', 'cuml'], weight: 1.3, isCore: false },
  { name: 'Dask', variations: ['dask ml'], weight: 1.2, isCore: false },
  { name: 'Ray', variations: ['ray.io', 'anyscale'], weight: 1.3, isCore: false },

  // Deep Learning
  { name: 'Deep Learning', variations: ['dl', 'neural networks', 'neural network'], weight: 2.0, isCore: true },
  { name: 'CNN', variations: ['convolutional neural network', 'convnet'], weight: 1.7, isCore: false },
  { name: 'RNN', variations: ['recurrent neural network'], weight: 1.5, isCore: false },
  { name: 'LSTM', variations: ['long short-term memory'], weight: 1.5, isCore: false },
  { name: 'GRU', variations: ['gated recurrent unit'], weight: 1.3, isCore: false },
  { name: 'Transformer', variations: ['transformers', 'attention mechanism'], weight: 1.8, isCore: false },
  { name: 'BERT', variations: ['bidirectional encoder'], weight: 1.6, isCore: false },
  { name: 'GPT', variations: ['gpt-3', 'gpt-4', 'gpt 4', 'generative pre-trained'], weight: 1.8, isCore: false },
  { name: 'LLM', variations: ['large language model', 'large language models'], weight: 1.9, isCore: true },
  { name: 'GAN', variations: ['generative adversarial network', 'gans'], weight: 1.5, isCore: false },
  { name: 'VAE', variations: ['variational autoencoder'], weight: 1.3, isCore: false },
  { name: 'Autoencoder', variations: ['auto encoder', 'autoencoders'], weight: 1.3, isCore: false },
  { name: 'ResNet', variations: ['residual network'], weight: 1.3, isCore: false },
  { name: 'VGG', variations: ['vggnet'], weight: 1.1, isCore: false },
  { name: 'YOLO', variations: ['you only look once'], weight: 1.4, isCore: false },
  { name: 'U-Net', variations: ['unet'], weight: 1.2, isCore: false },
  { name: 'Diffusion Models', variations: ['diffusion', 'stable diffusion'], weight: 1.5, isCore: false },
  { name: 'Fine-tuning', variations: ['fine tuning', 'finetuning'], weight: 1.4, isCore: false },
  { name: 'Transfer Learning', variations: ['transfer-learning'], weight: 1.5, isCore: false },
  { name: 'Pre-training', variations: ['pretraining', 'pre training'], weight: 1.3, isCore: false },

  // NLP
  { name: 'NLP', variations: ['natural language processing', 'nlp'], weight: 1.8, isCore: true },
  { name: 'Text Classification', variations: ['text categorization', 'sentiment analysis'], weight: 1.4, isCore: false },
  { name: 'Named Entity Recognition', variations: ['ner', 'entity extraction'], weight: 1.4, isCore: false },
  { name: 'Sentiment Analysis', variations: ['sentiment classification', 'opinion mining'], weight: 1.4, isCore: false },
  { name: 'Text Summarization', variations: ['summarization'], weight: 1.3, isCore: false },
  { name: 'Question Answering', variations: ['qa', 'q&a'], weight: 1.4, isCore: false },
  { name: 'Machine Translation', variations: ['neural machine translation', 'nmt'], weight: 1.3, isCore: false },
  { name: 'Information Extraction', variations: ['ie', 'relation extraction'], weight: 1.3, isCore: false },
  { name: 'Text Generation', variations: ['language generation'], weight: 1.4, isCore: false },
  { name: 'Tokenization', variations: ['tokenizer', 'bpe', 'sentencepiece'], weight: 1.3, isCore: false },
  { name: 'Word Embeddings', variations: ['word2vec', 'glove', 'fasttext'], weight: 1.4, isCore: false },
  { name: 'RAG', variations: ['retrieval augmented generation', 'retrieval-augmented'], weight: 1.6, isCore: false },
  { name: 'Prompt Engineering', variations: ['prompt design', 'prompting'], weight: 1.5, isCore: false },
  { name: 'LangChain', variations: ['lang chain'], weight: 1.5, isCore: false },
  { name: 'LlamaIndex', variations: ['llama index', 'gpt index'], weight: 1.4, isCore: false },
  { name: 'Vector Database', variations: ['vector db', 'pinecone', 'weaviate', 'milvus', 'qdrant', 'chroma'], weight: 1.5, isCore: false },

  // Computer Vision
  { name: 'Computer Vision', variations: ['cv', 'image processing'], weight: 1.8, isCore: true },
  { name: 'Object Detection', variations: ['object recognition'], weight: 1.5, isCore: false },
  { name: 'Image Classification', variations: ['image recognition'], weight: 1.5, isCore: false },
  { name: 'Image Segmentation', variations: ['semantic segmentation', 'instance segmentation'], weight: 1.4, isCore: false },
  { name: 'Face Recognition', variations: ['facial recognition', 'face detection'], weight: 1.4, isCore: false },
  { name: 'OCR', variations: ['optical character recognition', 'text recognition'], weight: 1.4, isCore: false },
  { name: 'Pose Estimation', variations: ['keypoint detection'], weight: 1.2, isCore: false },
  { name: 'Action Recognition', variations: ['activity recognition'], weight: 1.2, isCore: false },
  { name: 'Video Analysis', variations: ['video understanding'], weight: 1.3, isCore: false },
  { name: 'Augmented Reality', variations: ['ar', 'arkit', 'arcore'], weight: 1.3, isCore: false },

  // MLOps & Infrastructure
  { name: 'MLOps', variations: ['ml ops', 'machine learning operations'], weight: 1.8, isCore: true },
  { name: 'MLflow', variations: ['ml flow'], weight: 1.6, isCore: false },
  { name: 'Kubeflow', variations: ['kube flow'], weight: 1.5, isCore: false },
  { name: 'SageMaker', variations: ['aws sagemaker', 'amazon sagemaker'], weight: 1.6, isCore: false },
  { name: 'Vertex AI', variations: ['google vertex', 'gcp vertex'], weight: 1.5, isCore: false },
  { name: 'Azure ML', variations: ['azure machine learning'], weight: 1.4, isCore: false },
  { name: 'Databricks', variations: ['databricks ml'], weight: 1.5, isCore: false },
  { name: 'Weights & Biases', variations: ['wandb', 'w&b'], weight: 1.4, isCore: false },
  { name: 'DVC', variations: ['data version control'], weight: 1.3, isCore: false },
  { name: 'Airflow', variations: ['apache airflow'], weight: 1.4, isCore: false },
  { name: 'Prefect', variations: [], weight: 1.2, isCore: false },
  { name: 'Dagster', variations: [], weight: 1.2, isCore: false },
  { name: 'Feature Store', variations: ['feature engineering', 'feast'], weight: 1.4, isCore: false },
  { name: 'Model Registry', variations: ['model versioning'], weight: 1.3, isCore: false },
  { name: 'Model Serving', variations: ['model deployment', 'inference server'], weight: 1.4, isCore: false },
  { name: 'TensorRT', variations: ['tensor rt'], weight: 1.3, isCore: false },
  { name: 'ONNX', variations: ['onnx runtime'], weight: 1.3, isCore: false },
  { name: 'TorchServe', variations: ['torch serve'], weight: 1.2, isCore: false },
  { name: 'TFServing', variations: ['tensorflow serving', 'tf serving'], weight: 1.2, isCore: false },
  { name: 'Triton', variations: ['nvidia triton', 'triton inference server'], weight: 1.3, isCore: false },
  { name: 'BentoML', variations: ['bento ml'], weight: 1.2, isCore: false },
  { name: 'Seldon', variations: ['seldon core'], weight: 1.2, isCore: false },

  // Data Science
  { name: 'Data Science', variations: ['data scientist'], weight: 2.0, isCore: true },
  { name: 'Pandas', variations: ['pandas dataframe'], weight: 1.7, isCore: true },
  { name: 'NumPy', variations: ['numpy', 'np'], weight: 1.7, isCore: true },
  { name: 'SciPy', variations: ['scipy'], weight: 1.4, isCore: false },
  { name: 'Matplotlib', variations: ['pyplot'], weight: 1.4, isCore: false },
  { name: 'Seaborn', variations: [], weight: 1.3, isCore: false },
  { name: 'Plotly', variations: ['plotly express'], weight: 1.3, isCore: false },
  { name: 'Jupyter', variations: ['jupyter notebook', 'jupyterlab', 'ipython'], weight: 1.6, isCore: true },
  { name: 'Feature Engineering', variations: ['feature extraction'], weight: 1.5, isCore: false },
  { name: 'Data Preprocessing', variations: ['data cleaning', 'data wrangling'], weight: 1.4, isCore: false },
  { name: 'Exploratory Data Analysis', variations: ['eda'], weight: 1.4, isCore: false },
  { name: 'Statistical Analysis', variations: ['statistics', 'statistical modeling'], weight: 1.5, isCore: false },
  { name: 'A/B Testing', variations: ['ab testing', 'experimentation'], weight: 1.4, isCore: false },
  { name: 'Hypothesis Testing', variations: ['statistical testing'], weight: 1.3, isCore: false },

  // ML Concepts
  { name: 'Machine Learning', variations: ['ml', 'machine-learning'], weight: 2.0, isCore: true },
  { name: 'Supervised Learning', variations: ['supervised ml'], weight: 1.5, isCore: true },
  { name: 'Unsupervised Learning', variations: ['unsupervised ml', 'clustering'], weight: 1.4, isCore: false },
  { name: 'Reinforcement Learning', variations: ['rl', 'deep rl'], weight: 1.5, isCore: false },
  { name: 'Classification', variations: ['classifier'], weight: 1.4, isCore: false },
  { name: 'Regression', variations: ['regressor'], weight: 1.4, isCore: false },
  { name: 'Clustering', variations: ['k-means', 'hierarchical clustering'], weight: 1.3, isCore: false },
  { name: 'Dimensionality Reduction', variations: ['pca', 't-sne', 'umap'], weight: 1.3, isCore: false },
  { name: 'Ensemble Methods', variations: ['random forest', 'gradient boosting', 'bagging'], weight: 1.4, isCore: false },
  { name: 'Cross Validation', variations: ['cross-validation', 'k-fold'], weight: 1.3, isCore: false },
  { name: 'Hyperparameter Tuning', variations: ['hyperparameter optimization', 'grid search', 'bayesian optimization'], weight: 1.4, isCore: false },
  { name: 'Model Evaluation', variations: ['metrics', 'accuracy', 'precision', 'recall', 'f1'], weight: 1.4, isCore: false },
  { name: 'Overfitting', variations: ['regularization', 'dropout'], weight: 1.2, isCore: false },
  { name: 'Bias-Variance', variations: ['bias variance tradeoff'], weight: 1.2, isCore: false },
  { name: 'Model Interpretability', variations: ['explainability', 'xai', 'shap', 'lime'], weight: 1.4, isCore: false },
  { name: 'Anomaly Detection', variations: ['outlier detection'], weight: 1.3, isCore: false },
  { name: 'Time Series', variations: ['time-series', 'forecasting', 'prophet'], weight: 1.4, isCore: false },
  { name: 'Recommendation Systems', variations: ['recommender systems', 'collaborative filtering'], weight: 1.4, isCore: false },

  // AI/GenAI
  { name: 'Artificial Intelligence', variations: ['ai'], weight: 1.8, isCore: true },
  { name: 'Generative AI', variations: ['genai', 'gen ai'], weight: 1.8, isCore: true },
  { name: 'OpenAI', variations: ['openai api'], weight: 1.6, isCore: false },
  { name: 'Claude', variations: ['anthropic claude', 'claude api'], weight: 1.4, isCore: false },
  { name: 'ChatGPT', variations: ['chat gpt'], weight: 1.5, isCore: false },
  { name: 'Llama', variations: ['llama 2', 'llama 3', 'meta llama'], weight: 1.4, isCore: false },
  { name: 'Mistral', variations: ['mistral ai'], weight: 1.3, isCore: false },
  { name: 'Gemini', variations: ['google gemini', 'gemini pro'], weight: 1.4, isCore: false },
  { name: 'DALL-E', variations: ['dalle', 'dall e'], weight: 1.3, isCore: false },
  { name: 'Midjourney', variations: ['mid journey'], weight: 1.2, isCore: false },
  { name: 'Stable Diffusion', variations: ['stability ai'], weight: 1.3, isCore: false },

  // Hardware
  { name: 'GPU', variations: ['cuda', 'nvidia gpu', 'graphics processing unit'], weight: 1.5, isCore: false },
  { name: 'TPU', variations: ['tensor processing unit', 'google tpu'], weight: 1.3, isCore: false },
  { name: 'CUDA', variations: ['cuda programming', 'cudnn'], weight: 1.4, isCore: false },
  { name: 'Distributed Training', variations: ['multi-gpu', 'data parallel'], weight: 1.3, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getMlAiPatterns(): [RegExp, string][] {
  return ML_AI_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
