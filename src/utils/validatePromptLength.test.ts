import { describe, it, expect } from 'vitest';
import { MAX_PROMPT_LENGTH, validatePromptLength } from './validatePromptLength';

describe('validatePromptLength', () => {
  it('빈 문자열은 유효하다', () => {
    expect(validatePromptLength('')).toEqual({ isValid: true });
  });

  it('500자 이하 문자열은 유효하다', () => {
    const prompt = 'a'.repeat(MAX_PROMPT_LENGTH);
    expect(validatePromptLength(prompt)).toEqual({ isValid: true });
  });

  it('500자를 초과하면 유효하지 않고 에러 메시지를 반환한다', () => {
    const prompt = 'a'.repeat(MAX_PROMPT_LENGTH + 1);
    expect(validatePromptLength(prompt)).toEqual({
      isValid: false,
      error: `프롬프트는 최대 ${MAX_PROMPT_LENGTH}자까지 입력할 수 있습니다.`,
    });
  });
});
