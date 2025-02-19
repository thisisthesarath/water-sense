"use client";

import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-all",
        "dark:border-gray-700 dark:bg-gray-900 dark:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx("mb-2 font-semibold text-lg", "dark:text-gray-200", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={clsx("text-xl font-bold", "dark:text-white", className)}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx("text-gray-700", "dark:text-gray-400", className)}>
      {children}
    </div>
  );
}

interface AlertCardProps {
  id: number;
  company: string;
  location: string;
}

export function AlertCard({ id, company, location }: AlertCardProps) {
  return (
    <Link href={`/companies/${id}`}>
      <Card className="w-full max-w-sm cursor-pointer hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>{company}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{location}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
