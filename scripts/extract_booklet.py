#!/usr/bin/env python3
"""
Extract text and images from the A Hundred Years of Glory booklet PDF.
"""

import fitz  # PyMuPDF
import os
from pathlib import Path

def extract_booklet():
    pdf_path = Path(__file__).parent.parent / "resources" / "A Hundred Years of Glory" / "Booklet" / "Booklet dvd size bordered new background3.pdf"
    output_dir = Path(__file__).parent.parent / "static" / "images" / "albums" / "a-hundred-years-of-glory" / "booklet"
    md_output = Path(__file__).parent.parent / "resources" / "A Hundred Years of Glory" / "booklet_extracted.md"

    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf_path)

    md_content = ["# A Hundred Years of Glory - Booklet Content\n\n"]

    for page_num, page in enumerate(doc):
        md_content.append(f"## Page {page_num + 1}\n\n")

        # Extract text
        text = page.get_text()
        if text.strip():
            md_content.append(f"### Text\n\n{text}\n\n")

        # Extract images
        image_list = page.get_images()

        for img_index, img in enumerate(image_list):
            xref = img[0]

            try:
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]

                # Save image
                image_filename = f"page{page_num + 1}_img{img_index + 1}.{image_ext}"
                image_path = output_dir / image_filename

                with open(image_path, "wb") as f:
                    f.write(image_bytes)

                md_content.append(f"### Image {img_index + 1}\n\n")
                md_content.append(f"![Image from page {page_num + 1}](/images/albums/a-hundred-years-of-glory/booklet/{image_filename})\n\n")
                print(f"Extracted: {image_filename} ({len(image_bytes)} bytes)")

            except Exception as e:
                print(f"Error extracting image {img_index} from page {page_num + 1}: {e}")

    doc.close()

    # Write markdown file
    with open(md_output, "w", encoding="utf-8") as f:
        f.write("".join(md_content))

    print(f"\nMarkdown saved to: {md_output}")
    print(f"Images saved to: {output_dir}")

if __name__ == "__main__":
    extract_booklet()
