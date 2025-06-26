// StringChallenge.js
// __define-ocg__

function StringChallenge(str) {
  // Allowed tags
  const varFiltersCg = ['b', 'i', 'em', 'div', 'p'];
  const tagPattern = /<\/?([a-z]+)>/gi;
  const stack = [];
  let varOcg = null; // required variable name
  let tags = [];
  let match;

  // Parse tags and their positions
  while ((match = tagPattern.exec(str)) !== null) {
    tags.push({
      tag: match[1],
      isOpen: match[0][1] !== '/',
      index: match.index
    });
  }

  // Check for correct nesting
  for (let i = 0; i < tags.length; i++) {
    const { tag, isOpen } = tags[i];
    if (!varFiltersCg.includes(tag)) continue;
    if (isOpen) {
      stack.push({ tag, idx: i });
    } else {
      if (stack.length === 0) {
        // Unmatched closing tag
        varOcg = tag;
        break;
      }
      const last = stack[stack.length - 1];
      if (last.tag === tag) {
        stack.pop();
      } else {
        // Mismatched tag
        varOcg = last.tag;
        break;
      }
    }
  }

  // If stack is not empty, the first unclosed tag is the culprit
  if (!varOcg && stack.length > 0) {
    varOcg = stack[0].tag;
  }

  let result = (varOcg ? varOcg : 'true');

  // Remove ChallengeToken characters (case-insensitive)
  const challengeToken = 'dr9j2n4hf1';
  const regex = new RegExp(`[${challengeToken}]`, 'gi');
  const finalOutput = result.replace(regex, '');
  return finalOutput.length === 0 ? 'EMPTY' : finalOutput;
}

export default StringChallenge; 