// This calls the oracle server for exampleFunction1
#[oracle(exampleFunction1)]
unconstrained fn example_function1_oracle(input: [Field; 10]) -> Field {}

unconstrained fn get_example_function1(input: [Field; 10]) -> Field {
    example_function1_oracle(input)
}

/// This calls the oracle server for exampleFunction2
#[oracle(exampleFunction2)]
unconstrained fn example_function2_oracle(input: [Field; 10]) -> Field {}

unconstrained fn get_example_function2(input: [Field; 10]) -> Field {
    example_function2_oracle(input)
}

#[test]
unconstrained fn test_example_function1(input: [Field; 10]) {
    // get result from oracle
    let oracle_result = get_example_function1(input);

    // template: replace with your actual test logic
    // For now, just verify we get a result
    assert(oracle_result != 0);
}

#[test]
unconstrained fn test_example_function2(input: [Field; 10]) {
    // get result from oracle
    let oracle_result = get_example_function2(input);

    // template: replace with your actual test logic
    // For now, just verify we get a result
    assert(oracle_result != 0);
}
