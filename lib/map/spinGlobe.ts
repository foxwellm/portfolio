let spinFrameId: number | null = null;

export function startGlobeSpin(map: mapboxgl.Map) {
  let previousTime = performance.now();

  const animate = (time: number) => {
    const deltaSeconds = (time - previousTime) / 1000;
    previousTime = time;

    const center = map.getCenter();
    const secondsForFullRotation = 12;
    const distancePerSecond = 360 / secondsForFullRotation;
    center.lng = center.lng - distancePerSecond * deltaSeconds;

    map.easeTo({
      // TODO: animation is jumping straight to lat:0, need to ease
      center,
      duration: 0,
      easing: (n) => n,
      bearing: 0,
      pitch: 0,
    });

    spinFrameId = requestAnimationFrame(animate);
  };

  spinFrameId = requestAnimationFrame(animate);
}

export function stopGlobeSpin() {
  if (spinFrameId !== null) {
    cancelAnimationFrame(spinFrameId);
    spinFrameId = null;
  }
}
