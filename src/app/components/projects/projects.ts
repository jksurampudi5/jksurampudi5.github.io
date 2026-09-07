import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: string;
  company: string;
  client: string;
  role: string;
  period: string;
  location: string;
  title: string;
  tagline: string;
  tools: string[];
  highlights: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  selectedCompany: string = 'ALL';

  companies: string[] = [
    'ALL',
    'NOUS INFOSYSTEMS',
    'SYNECHRON',
    'CES LTD',
    'THAPASSU IT GLOBAL',
    'MOBILE PROGRAMMING',
    'COGNIZANT'
  ];

  projects: Project[] = [
    {
      id: 'nous-bain',
      company: 'NOUS INFOSYSTEMS',
      client: 'Bain & Company',
      role: 'Module Lead',
      period: 'Oct 2025 – Present',
      location: 'India · Hybrid',
      title: 'Alteryx-to-Databricks Enterprise Platform Modernization',
      tagline: 'Consolidated enterprise Quality Control Tools output data into a Databricks Medallion Architecture, slashing compute costs and processing time by 60%+.',
      tools: ['Azure Databricks', 'PySpark', 'Delta Lake', 'Unity Catalog', 'Incremental Processing', 'Python', 'Git', 'Databricks Genie'],
      highlights: [
        'Led the design and implementation of a Databricks Medallion Architecture spanning Bronze, Silver, and Gold layers to consolidate Quality Control Tools output data with incremental refresh capabilities.',
        'Established prism_bronze, prism_silver, and prism_gold catalogs for ADAM, ODDS, Translator, VA Mod, and VS outputs, standardizing data models and governance through Unity Catalog.',
        'Introduced MERGE-based incremental upsert logic in PySpark, replacing full-load processing and reducing compute costs and processing time by 60%+.',
        'Authored 4 production notebooks for Bronze ingestion, Bronze-to-Silver transformation, Silver-to-Gold aggregation, and Gold reporting views; conducted technical code walkthroughs with stakeholders.',
        'Spearheaded migration of legacy Alteryx workflows by analyzing container logic and dependencies, translating business logic into scalable Spark-based transformations.',
        'Executed quarterly data refreshes by ingesting Decipher tracking data, performing cleansing and transformation in Databricks, and publishing curated datasets to PostgreSQL through the Alteryx bridge.',
        'Created a reusable Data Platform framework with standardized ingestion, data quality, and transformation patterns with Git-based version control for reproducibility and code review.',
        'Leveraged OpenAI ChatGPT and Databricks Genie for code generation and optimization to boost engineering velocity throughout the migration.'
      ]
    },
    {
      id: 'nous-tachyon',
      company: 'NOUS INFOSYSTEMS',
      client: 'Tachyon',
      role: 'Module Lead',
      period: 'Oct 2025 – Present',
      location: 'India · Hybrid',
      title: 'Automated Data Ingestion & Notification Pipeline',
      tagline: 'End-to-end Apache Airflow orchestration pipeline ingesting REST/CURL API data with XCom state exchange and automated reporting.',
      tools: ['Apache Airflow', 'REST APIs', 'Python', 'Email Automation', 'TaskFlow API', 'Airflow Sensors'],
      highlights: [
        'Architected an Apache Airflow pipeline to ingest external data from REST/CURL API endpoints, orchestrate multi-stage processing, exchange intermediate results through XCom, and trigger automated email notifications.',
        'Defined Airflow DAGs with task dependencies, scheduling, retry logic, failure handling, branching, and callbacks across 8+ tasks.',
        'Developed validation and transformation logic within Airflow tasks, storing intermediate results in XCom for downstream processing and dynamic email generation.',
        'Configured Airflow EmailOperator with callback functions and applied TaskFlow API, operators, and sensors to support scheduling, monitoring, and notification workflows.'
      ]
    },
    {
      id: 'synechron-latitude',
      company: 'SYNECHRON',
      client: 'Latitude Financial Services',
      role: 'Lead Data Engineer',
      period: 'Apr 2025 – May 2025',
      location: 'Hyderabad, India',
      title: 'Fixed-Width File Ingestion & Transformation Pipeline',
      tagline: 'High-throughput AWS Glue & PySpark pipeline with metadata-driven schema evolution loading curated financial data into Amazon Aurora.',
      tools: ['AWS Glue', 'PySpark', 'Amazon S3', 'Amazon Aurora', 'Spark SQL', 'Python', 'DynamicFrames'],
      highlights: [
        'Engineered an AWS Glue and PySpark pipeline to ingest fixed-width files from Amazon S3, apply dynamic schema transformations, normalize data, and load curated outputs into Amazon Aurora.',
        'Developed an AWS Glue ETL job using Spark RDDs to parse large fixed-width files and convert raw text into structured Spark DataFrames with automatic data type inference.',
        'Introduced metadata-driven schema generation using JSON-based column specifications, enabling schema evolution without code changes across 10+ file formats.',
        'Created custom fixed-width parsing logic for column slicing, whitespace trimming, type conversion, format validation, and error logging.',
        'Converted Spark DataFrames to Glue DynamicFrames and configured JDBC loading to Amazon Aurora with connection pooling, error handling, and transaction management.'
      ]
    },
    {
      id: 'ces-beachbody',
      company: 'CES LTD',
      client: 'Beachbody',
      role: 'Senior Data Engineer',
      period: 'Jun 2024 – Apr 2025',
      location: 'India · Remote',
      title: 'Snowflake DBT Analytics & Billing Optimization',
      tagline: 'Production DBT & Snowflake data modeling for monthly recurring billing calculations, reducing nightly batch runtime from 3.5 hours to 1.2 hours.',
      tools: ['Snowflake', 'DBT', 'SQL', 'Python', 'Git', 'SCD Type 2', 'Data Modeling'],
      highlights: [
        'Engineered DBT transformation models for monthly billing calculations using incremental materializations, PK/FK constraints, and SCD Type 2 logic.',
        'Compiled, executed, and validated dbt compile, dbt run, and dbt test workflows in a production Snowflake environment, achieving 100% post-transformation data accuracy through custom SQL tests.',
        'Introduced incremental table strategies using dynamic partition pruning and clustering, reducing query execution time by 40% and Snowflake storage costs by 25%.',
        'Applied Snowflake CAST, TO_TIMESTAMP, and aggregate functions to support complex billing-cycle calculations and schema-aligned conversions.',
        'Diagnosed DBT job failures through log analysis and query profiling, slashing nightly batch runtime from 3.5 hours to 1.2 hours.',
        'Conducted DBT pull-request reviews, enforced schema governance standards, and mentored junior engineers on incremental materialization.'
      ]
    },
    {
      id: 'thapassu-verizon',
      company: 'THAPASSU IT GLOBAL',
      client: 'Verizon',
      role: 'Senior Data Engineer',
      period: 'Jun 2020 – Jan 2021',
      location: 'India',
      title: 'Serverless Data Ingestion & Warehouse Optimization',
      tagline: 'Serverless S3-to-Snowflake pipeline using AWS Lambda, Airflow orchestration with 99.5% reliability, and CI/CD deployment.',
      tools: ['Snowflake', 'DBT', 'Apache Airflow', 'AWS Lambda', 'Amazon S3', 'Python', 'CI/CD', 'GitHub'],
      highlights: [
        'Architected a serverless AWS Lambda and boto3 solution to ingest data from Amazon S3 into Snowflake with auto-scaling and minimal operational overhead.',
        'Established secure Snowflake connectors and connection pooling within Lambda to support 1,000+ daily data loads.',
        'Integrated dynamic source and destination parameters through AWS Lambda Layers, improving code reuse and reducing manual operational tasks by 30%.',
        'Improved Snowflake query performance through table clustering, materialized views, Time Travel, and semi-structured JSON handling, reducing execution time by 50%+.',
        'Developed Apache Airflow DAGs with dynamic task parallelization, dependency management, and SLA enforcement, achieving 99.5% pipeline reliability with <1 minute MTTR.',
        'Established CI/CD deployment for DBT models and Airflow DAGs using GitHub webhooks and orchestration scripts, reducing deployment time from 2 hours to 5 minutes.',
        'Managed lineage across 50+ models in DBT while applying DBT Snapshots for SCD Type 2 history tracking.'
      ]
    },
    {
      id: 'mobile-prog',
      company: 'MOBILE PROGRAMMING',
      client: 'Enterprise Analytics',
      role: 'Software Engineer',
      period: 'Apr 2022 – Sep 2022',
      location: 'India · Remote',
      title: 'Big Data Lake & Spark ETL Modernization',
      tagline: 'Distributed big data ingestion and transformation with Apache Spark, Hive partitioning, and modular DBT frameworks over 500GB+ monthly loads.',
      tools: ['Apache Spark', 'PySpark', 'Spark SQL', 'Hive', 'Sqoop', 'Snowflake', 'DBT', 'HDFS', 'Python'],
      highlights: [
        'Extracted and ingested structured data from RDBMS platforms into HDFS using Sqoop incremental append strategies, supporting 500GB+ of monthly ingestion for analytics and BI workloads.',
        'Processed 50GB+ member and engagement datasets with Apache Spark SQL and DataFrame APIs, performing window functions, joins, aggregations, and large-scale transformations.',
        'Developed ETL workflows for ingestion, transformation, deduplication, and null handling; applied partitioning strategies that reduced query time by 35%.',
        'Authored optimized SQL with CTEs, window functions, and stored procedures to support Hive processing across 100M+ row transaction tables.',
        'Established Hive dynamic partitioning and bucketing strategies in HDFS to improve retrieval efficiency and support ad-hoc analysis.',
        'Developed modular DBT data models and test frameworks supporting data lineage and referential integrity across fact and dimension tables.'
      ]
    },
    {
      id: 'cognizant',
      company: 'COGNIZANT',
      client: 'Enterprise Analytics',
      role: 'Associate',
      period: 'Jan 2020 – Jun 2020',
      location: 'Hyderabad, India',
      title: 'Star-Schema Data Pipeline & Snowpipe Automation',
      tagline: 'Automated data warehouse ingestion via Snowpipe, star-schema modeling over 1B+ rows, and zero-data-loss migration with Time Travel.',
      tools: ['Snowflake', 'Snowpipe', 'Sqoop', 'Hive', 'SQL', 'DBT', 'Python'],
      highlights: [
        'Developed a Python-based extraction framework to retrieve and transform SQL Server data into optimized star-schema fact and dimension tables.',
        'Maintained scalable reporting pipelines, improving query performance by 45% and enabling self-service analytics for 50+ business users.',
        'Established Slowly Changing Dimension (SCD) and historical tracking patterns supporting time-series analysis across datasets exceeding 1B+ rows.',
        'Applied Snowflake Time Travel during migration errors, ensuring zero data loss and an RTO of <1 hour for production incidents.',
        'Used Snowflake Zero Copy Cloning to create storage-efficient datasets for testing and development, reducing storage overhead by 60%.',
        'Architected automated ingestion from S3/Blob storage using Snowpipe, enabling real-time data availability without manual intervention.'
      ]
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedCompany === 'ALL') {
      return this.projects;
    }
    return this.projects.filter(p => p.company === this.selectedCompany);
  }

  filterByCompany(company: string): void {
    this.selectedCompany = company;
  }
}