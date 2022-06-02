import { Facebook, Language } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function SocialsButton({ type, value }) {
  if (!value) {
    return null;
  }
  switch (type) {
  case "website":
    return <WebsiteButton value={value} />;
  case "facebook_page":
    return <FacebookPage value={value} />;
  case "facebook_group":
    return <FacebookGroup value={value} />;
  }
  return null;
}

function WebsiteButton({ value }) {
  if (!isValidURL(value)) {
    return null;
  }
  return (
    <Button
      startIcon={<Language />}
      href={value}
      rel="noopener noreferrer"
      target="_blank"
    >
      Website
    </Button>
  );
}

function FacebookPage({ value }) {
  if (!isValidURL(value)) {
    return null;
  }
  return (
    <Button
      startIcon={<Facebook />}
      href={value}
      rel="noopener noreferrer"
      target="_blank"
    >
      Facebook Page
    </Button>
  );
}

function FacebookGroup({ value }) {
  if (!isValidFacebookURL(value)) {
    return null;
  }
  return (
    <Button
      startIcon={<Facebook />}
      href={value}
      rel="noopener noreferrer"
      target="_blank"
    >
      Facebook Group
    </Button>
  );
}

// Very basic validation due to strange scraper results
// Some website URLs don't start with "http://" nor "https://"

function isValidURL(value) {
  return !value.includes(" ");
}

function isValidFacebookURL(value) {
  return isValidURL(value)
    && (value.includes("fb.com") || value.includes("facebook.com"));
}