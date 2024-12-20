const { isLoggedIn, isNotLoggedIn } = require('./');

describe('isLoggedIn', () => {
  // 테스트 이름을 기획 문서처럼 짓는다 (isAuthenticated가 true면 X / 로그인을 한 상태이면)
  test('로그인을 한 상태면 next를 호출한다', () => {
    const req = {
      isAuthenticated() {
        // 로그인을 한 상태면 true를 반환
        return true;
      }
    }
    const res = {};
    const next = jest.fn();
    isLoggedIn(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  test('로그인을 안 한 상태면 403 "로그인 필요"를 응답한다', () => {
    const req = {
      isAuthenticated() {
        // 로그인을 안 한 상태면 false를 반환
        return false;
      }
    }
    const res = {
      // 메서드 체이닝을 위해서 res를 반환
      status: jest.fn(() => res),
      send: jest.fn()
    };
    const next = jest.fn();
    isLoggedIn(req, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith('로그인 필요');
  });
});

describe('isNotLoggedIn', () => {
  test('로그인을 안 한 상태면 next를 호출한다', () => {
    const req = {
      isAuthenticated() {
        // 로그인을 안 한 상태면 false를 반환
        return false;
      }
    }
    const res = {};
    const next = jest.fn();
    isNotLoggedIn(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  test('로그인을 한 상태면 next를 호출한다', () => {
    const req = {
      isAuthenticated() {
        // 로그인을 한 상태면 true를 반환
        return true;
      }
    }
    const res = {
      redirect: jest.fn()
    };
    const next = jest.fn();
    isNotLoggedIn(req, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith(`/?error=${encodeURIComponent('로그인한 상태입니다.')}`);
  });
});