function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// alert(fib(3));  2
// alert(fib(7));  13
// alert(fib(77)); 5527939700884757
