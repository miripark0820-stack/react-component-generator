# PR Template Configuration

This file determines which PR template to use based on project language/region.

## Template Selection Logic

### English Template (`pr-template-en.md`)
Use this template for:
- International/overseas open-source projects
- English-speaking team projects
- Projects with GitHub README in English

### Korean Template (`pr-template-ko.md`)
Use this template for:
- Korean domestic projects
- Korean-speaking team projects
- Projects with GitHub README in Korean

## Usage in create-pr Skill

The `create-pr` skill will:
1. Detect the project type (international vs. Korean)
2. Check the README language
3. Select appropriate template automatically
4. Create PR with the selected template

## How to Detect Project Language

- Check `README.md` first 50 lines for language
- If README is in Korean (contains Korean characters) → Use Korean template
- If README is in English → Use English template
- Default: English template

## References
- English: `./pr-template-en.md`
- Korean: `./pr-template-ko.md`
