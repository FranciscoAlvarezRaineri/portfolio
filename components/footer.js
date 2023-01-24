import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
      Copyright © {new Date().getFullYear()}. Based on "Nextly" by{" "}
      <a href="https://web3templates.com/" target="_blank" rel="noopener">
        Web3Templates.
      </a>{" "}
    </div>
  );
}
