export interface CourseSyllabusModule {
week: string;
title: string;
topics: string[];
}

export interface Course {
id: string;
title: string;
slug: string;
category: string;
description: string;
duration: string;
level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
features: string[];
syllabus?: CourseSyllabusModule[];
}