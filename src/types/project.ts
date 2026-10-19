export interface Project {
id: string;
title: string;
description: string;
problemStatement: string;
image: string;
screenshots?: string[];
liveDemoUrl: string;
techStack: string[];
track: string;
creators: string[];
teamContributions: string[];
featured?: boolean;
}
