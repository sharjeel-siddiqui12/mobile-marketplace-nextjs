'use client';

import React from "react";
import { usePathname } from "next/navigation";
import classes from '@/components/header/navbar.module.css'
import Link from "next/link";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={pathname === href? classes.active : undefined}
      >
        {children}
      </Link>
    </div>
  );
}
