import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
  gradient: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Lakehouses & Data Warehouses',
      icon: '❄️',
      description: 'Enterprise lakehouse architecture, governance, and warehouse optimization.',
      gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
      skills: [
        'Azure Databricks',
        'Delta Lake',
        'Unity Catalog',
        'Snowflake',
        'Snowpipe',
        'Zero Copy Clone',
        'Time Travel',
        'Streams & Tasks',
        'Clustering & Pruning'
      ]
    },
    {
      title: 'Big Data & Distributed Compute',
      icon: '⚡',
      description: 'Distributed query engines, high-scale transformations, and cluster performance tuning.',
      gradient: 'linear-gradient(135deg, #0d9488, #2dd4bf)',
      skills: [
        'PySpark',
        'Apache Spark',
        'Spark SQL',
        'DataFrame APIs',
        'Spark RDDs',
        'Apache Hive',
        'HDFS Partitioning',
        'Apache Sqoop'
      ]
    },
    {
      title: 'Orchestration & Transformation',
      icon: '🔄',
      description: 'Resilient DAG orchestration, incremental data modeling, and automated pipelines.',
      gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)',
      skills: [
        'Apache Airflow',
        'Airflow DAGs',
        'TaskFlow API',
        'XCom State Passing',
        'Airflow Sensors',
        'DBT (Data Build Tool)',
        'Incremental Models',
        'Email Automation'
      ]
    },
    {
      title: 'Cloud & Serverless Platforms',
      icon: '☁️',
      description: 'Cloud storage, serverless compute, managed databases, and scalable ingestion.',
      gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
      skills: [
        'AWS Glue',
        'Amazon S3',
        'AWS Lambda',
        'Amazon Aurora',
        'AWS Step Functions',
        'Azure Cloud',
        'PostgreSQL',
        'REST APIs'
      ]
    },
    {
      title: 'Data Engineering Patterns',
      icon: '🏛️',
      description: 'Core design patterns, data quality validation, and schema evolution.',
      gradient: 'linear-gradient(135deg, #0284c7, #2dd4bf)',
      skills: [
        'Python',
        'Advanced SQL',
        'Medallion Architecture',
        'Incremental Upserts (MERGE)',
        'Schema Evolution',
        'SCD Type 2 History',
        'Data Quality Testing',
        'Git & CI/CD Pipelines'
      ]
    }
  ];
}