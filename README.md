# password-scorer

`password-scorer` is a tool for evaluating the strength of passwords. It provides a score based on various security criteria and offers feedback and descriptions in multiple languages.


## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Function passwordScorer](#function-passwordscorer)
  - [Parameters](#parameters)
  - [Return](#return)
- [Supported Languages](#supported-languages)
  - [Using a Different Language (Spanish)](#example-using-a-different-language-spanish)
- [Examples of Passwords with Different Scores](#examples-of-passwords-with-different-scores)
  - [Score: 0 (Very Weak)](#score-0-very-weak)
  - [Score: 20 (Weak)](#score-20-weak)
  - [Score: 40 (Good)](#score-40-good)
  - [Score: 60 (Very Good)](#score-60-very-good)
  - [Score: 80 (Excellent)](#score-80-excellent)
  - [Score: 100 (Perfect)](#score-100-perfect)
- [Contributions](#contributions)
- [License](#license)

## Installation
You can install the package using npm:

```sh
npm i password-scorer
```

## Usage

Here is a basic example of how to use password-scorer:

```javascript
import { passwordScorer } from 'password-scorer';

const result = passwordScorer('YourPassword123!', 'en');
console.log(result);
// Output:
// {
//   score: 100,
//   feedback: [],
//   description: 'perfect'
// }
```


## Function passwordScorer
Parameters

- `password` (string): The password you want to evaluate.
- `language` (string): The language for feedback and descriptions (optional, default is 'en').

Return

The function returns an object with the following properties:

- `score` (number): The password score (from 0 to 100).
- `feedback` (string[]): Suggestions on how to improve the password.
- `description` (string): A description of the password's strength based on the score.

## Supported Languages

| Language           | Code   |
|--------------------|--------|
| English            | en     |
| Spanish            | es     |
| German             | de     |
| Simplified Chinese | zh     |
| Japanese           | ja     |
| Traditional Chinese| zh_TW  |
| Portuguese         | pt     |
| French             | fr     |


### Example: Using a Different Language (Spanish)

```javascript
import { passwordScorer } from 'password-scorer';

const result = passwordScorer('TuContraseña123!', 'es');
console.log(result);
// Output:
// {
//   score: 100,
//   feedback: [],
//   description: 'perfecta'
// }
```

## Examples of Passwords with Different Scores
Score: 0 (Very Weak)
```javascript
const result = passwordScorer('');
console.log(result);
// Output:
// {
//   score: 0,
//   feedback: ["The password is empty."],
//   description: 'very weak'
// }
```
Score: 20 (Weak)
```javascript
const result = passwordScorer('1234567');
console.log(result);
// Output:
// {
//   score: 20,
//   feedback: ["Must be more than 8 characters."],
//   description: 'weak'
// }
```
Score: 40 (Good)
```javascript
const result = passwordScorer('abcdefgh');
console.log(result);
// Output:
// {
//   score: 40,
//   feedback: ["Must contain at least one number.", "Must contain at least one uppercase letter.", "Must contain at least one symbol (e.g., !, @, #, $, %, ^, &, *)."],
//   description: 'good'
// }
```
Score: 60 (Very Good)
```javascript
const result = passwordScorer('abcde123');
console.log(result);
// Output:
// {
//   score: 60,
//   feedback: ["Must contain at least one uppercase letter.", "Must contain at least one symbol (e.g., !, @, #, $, %, ^, &, *)."],
//   description: 'very good'
// }
```

Score: 80 (Excellent)
```javascript
const result = passwordScorer('Abcde123');
console.log(result);
// Output:
// {
//   score: 60,
//   feedback: ["Must contain at least one symbol (e.g., !, @, #, $, %, ^, &, *)."],
//   description: 'Excellent'
// }
```
Score: 100 (Perfect)
```javascript
const result = passwordScorer('Abcdefg123!');
console.log(result);
// Output:
// {
//   score: 100,
//   feedback: [],
//   description: 'perfect'
// }

```

## Contributions
Contributions are welcome. If you want to add support for a new language or improve the package, please open an issue or a pull.

## License
This project is licensed under the MIT License. For more details, see the LICENSE file in the repository.