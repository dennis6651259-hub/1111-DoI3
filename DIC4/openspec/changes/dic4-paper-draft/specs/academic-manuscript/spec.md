## ADDED Requirements

### Requirement: Research status integrity
The manuscript SHALL distinguish proposed design, planned evaluation, and observed results.

#### Scenario: No experiment data exist
- **WHEN** a target from DIC3 is retained
- **THEN** it is identified as prospective and is not reported as achieved performance

### Requirement: Core academic sections
The revised manuscript SHALL include an Abstract, Introduction with research questions, and Related Work with verified citations and scoped comparisons.

#### Scenario: Closely related systems already exist
- **WHEN** agentic or retrieval-based nutrition work overlaps with the proposal
- **THEN** the manuscript cites that work and narrows its contribution without a first-of-its-kind claim

### Requirement: Before and after provenance
The delivery SHALL preserve a baseline and a revised LaTeX source with truthful provenance.

#### Scenario: Baseline is created during this task
- **WHEN** a new English baseline is adapted from DIC3
- **THEN** it is labeled as newly created and not represented as a historical Overleaf revision

### Requirement: Reproducible evaluation protocol
The manuscript SHALL define data grouping, controlled ablations, metrics, and abstention handling before results are available.

#### Scenario: The agent returns no estimate
- **WHEN** all-case energy hit rate is computed
- **THEN** abstentions remain in the denominator and conditional metrics are separately labeled

### Requirement: Delivery evidence integrity
The delivery SHALL distinguish local compilation, OpenSpec validation, GitHub publication, and actual Overleaf MCP execution.

#### Scenario: Overleaf MCP is unavailable
- **WHEN** only local sources and compiler tools are available
- **THEN** the sources and import instructions are delivered and external MCP evidence remains pending

### Requirement: Professor deliverable names
The repository SHALL include goal.md, design.md, task.md, manuscript sources, and the OpenSpec change directory.

#### Scenario: Reviewer opens DIC4
- **WHEN** the reviewer follows the README links
- **THEN** the named artifacts exist and completed tasks have corresponding evidence
