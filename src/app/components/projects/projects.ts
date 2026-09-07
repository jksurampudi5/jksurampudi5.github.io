import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  tech: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Databricks Medallion Pipeline',
      tech: 'Databricks • PySpark • Unity Catalog',
      description: 'Built and optimized medallion architecture with bronze, silver, and gold layers for QC Tools output data.'
    },
    {
      title: 'Alteryx to Databricks Migration',
      tech: 'Databricks • Migration • Enterprise',
      description: 'Led enterprise workflow migration for Bain & Company with scalable platform architecture.'
    },
    {
      title: 'AWS Glue Pipeline',
      tech: 'AWS Glue • PySpark • ETL',
      description: 'Developed fixed-width file ingestion pipeline with complex data parsing and transformations.'
    },
    {
      title: 'Airflow Data Ingestion Pipeline',
      tech: 'Apache Airflow • Python • Notifications',
      description: 'Built end-to-end Airflow pipeline for data ingestion, processing, and multi-source aggregation.'
    },
    {
      title: 'Snowflake DBT Analytics',
      tech: 'Snowflake • DBT • SQL',
      description: 'Developed DBT data models and billing pipeline for Snowflake environment with data quality tests.'
    },
    {
      title: 'Enterprise Data Platform',
      tech: 'Cloud Architecture • ETL • Data Governance',
      description: 'Designed and implemented enterprise-scale data platform supporting multiple data sources.'
    }
  ];
}