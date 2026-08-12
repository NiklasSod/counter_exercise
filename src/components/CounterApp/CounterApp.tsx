const CounterApp = () => {
  const counterAmount = 4;

  return (
    <main>
      <Collector />
      {Array.from({ length: counterAmount }, (_, index) => (
        <Counter key={index} />
      ))}
    </main>
  )
}

export default CounterApp