#!/usr/bin/env python3
"""Convert PDF files to markdown."""

import fitz  # PyMuPDF
import sys
import os
from pathlib import Path

def pdf_to_markdown(pdf_path: str, output_path: str = None) -> str:
    """Extract text from PDF and convert to markdown."""
    doc = fitz.open(pdf_path)

    content_parts = []

    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()

        if text.strip():
            content_parts.append(f"## Page {page_num + 1}\n\n{text}")

    doc.close()

    full_content = "\n\n---\n\n".join(content_parts)

    if output_path:
        Path(output_path).parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(full_content)
        print(f"Saved to: {output_path}")

    return full_content

def main():
    resources_dir = Path(__file__).parent.parent / "resources"
    output_dir = Path(__file__).parent.parent / "resources" / "markdown"

    # Find all PDF files
    pdf_files = list(resources_dir.rglob("*.pdf"))

    print(f"Found {len(pdf_files)} PDF files:")
    for pdf in pdf_files:
        print(f"  - {pdf.relative_to(resources_dir)}")

    for pdf_path in pdf_files:
        rel_path = pdf_path.relative_to(resources_dir)
        output_path = output_dir / rel_path.with_suffix('.md')

        print(f"\nConverting: {rel_path}")
        try:
            pdf_to_markdown(str(pdf_path), str(output_path))
        except Exception as e:
            print(f"  Error: {e}")

if __name__ == "__main__":
    main()
