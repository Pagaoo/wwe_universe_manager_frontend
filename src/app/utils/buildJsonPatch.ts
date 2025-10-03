export function buildJsonPatch(original: any, updated: any) {
  const patch: any[] = [];
  const patchMapper: { [key: string]: string } = {
    weightInKg: "/WeightInKgToPounds",
    heightInCm: "/HeightInCmToFeetAndInch"
  }

  for (const key in updated) {
    if (updated.hasOwnProperty(key)) {
      const originalValue = original[key]
      const updatedValue = updated[key]

      if (originalValue !== updatedValue) {
        const path = patchMapper[key] || `/${key}`
        let valueToSend = updatedValue

        if (updated instanceof Date) {
          valueToSend = updatedValue.toISOString().split("T")[0] // se por acaso uma data vir com timezone ele tira o timezone
        }

        patch.push({
          op: 'replace',
          path: path,
          value: valueToSend
        });
      }
    }
  }
  return patch;
}
