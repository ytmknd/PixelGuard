(function () {
  const els = {
    fileInput: document.getElementById("file-input"),
    uploadBox: document.getElementById("upload-box"),
    workspace: document.getElementById("workspace"),
    zoomOutBtn: document.getElementById("zoom-out-btn"),
    zoomInBtn: document.getElementById("zoom-in-btn"),
    zoomFitBtn: document.getElementById("zoom-fit-btn"),
    zoomActualBtn: document.getElementById("zoom-actual-btn"),
    zoomValue: document.getElementById("zoom-value"),
    pasteBtn: document.getElementById("paste-btn"),
    copyBtn: document.getElementById("copy-btn"),
    canvas: document.getElementById("document-canvas"),
    selectionBox: document.getElementById("selection-box"),
    magnifierBtn: document.getElementById("magnifier-btn"),
    magnifierZoom: document.getElementById("magnifier-zoom"),
    magnifierZoomValue: document.getElementById("magnifier-zoom-value"),
    magnifierLens: document.getElementById("magnifier-lens"),
    applyBtn: document.getElementById("apply-btn"),
    selectModeText: document.getElementById("select-mode-text"),
    cropStartBtn: document.getElementById("crop-start-btn"),
    cropCurrentBtn: document.getElementById("crop-current-btn"),
    cropAllBtn: document.getElementById("crop-all-btn"),
    cropCancelBtn: document.getElementById("crop-cancel-btn"),
    cropOverlay: document.getElementById("crop-overlay"),
    cropFrame: document.getElementById("crop-frame"),
    clearSelectionBtn: document.getElementById("clear-selection-btn"),
    downloadBtn: document.getElementById("download-btn"),
    blockSize: document.getElementById("block-size"),
    blockSizeValue: document.getElementById("block-size-value"),
    prevPageBtn: document.getElementById("prev-page-btn"),
    nextPageBtn: document.getElementById("next-page-btn"),
    pageStatus: document.getElementById("page-status"),
    statusText: document.getElementById("status-text")
  };

  const locale = getLocale();
  const messages = {
    ja: {
      appTitle: "PixelGuard",
      sidebarLabel: "操作パネル",
      appSubtitle: "画像/PDF モザイク編集",
      uploadTitle: "ファイルを選択",
      uploadHint: "PNG, JPEG, WebP, PDF をドロップ / Ctrl+V で貼り付け",
      pasteFromClipboard: "クリップボードから貼り付け",
      copyToClipboard: "クリップボードにコピー",
      clipboardNoFile: "クリップボードに画像またはPDFがありません。",
      clipboardReadUnsupported: "このブラウザはボタンからの貼り付けに対応していません。Ctrl+V で貼り付けてください。",
      clipboardReadDenied: "クリップボードの読み取りが許可されませんでした。Ctrl+V で貼り付けてください。",
      clipboardWriteUnsupported: "このブラウザは画像のクリップボードへのコピーに対応していません。",
      clipboardWriteFailed: "クリップボードにコピーできませんでした。",
      copied: "現在ページの画像をクリップボードにコピーしました。",
      output: "出力",
      outputType: "出力形式",
      image: "画像",
      download: "ダウンロード",
      mosaic: "モザイク",
      view: "表示",
      zoomIn: "拡大",
      zoomOut: "縮小",
      zoomFit: "全体表示",
      magnifier: "虫眼鏡",
      magnifierOn: "虫眼鏡: オン",
      magnifierOff: "虫眼鏡: オフ",
      magnification: "倍率",
      coarseness: "粗さ",
      selectionMode: "選択方法",
      selectArea: "範囲",
      selectText: "文字列",
      selectTextHint: "PDFの文字をドラッグして選択してください。ダブルクリックでひとまとまりを選択できます。",
      applyMosaic: "選択範囲に適用",
      clearSelection: "選択を解除",
      crop: "トリミング",
      applyCurrentPage: "現在ページに適用",
      applyAllPages: "全ページに適用",
      cancel: "キャンセル",
      page: "ページ",
      previousPage: "前のページ",
      nextPage: "次のページ",
      status: "状態",
      chooseFile: "ファイルを選択してください。",
      canvasPreview: "編集プレビュー",
      errorPrefix: "エラー: {message}",
      dropOneFile: "画像またはPDFファイルを1つドロップしてください。",
      loading: "読み込み中です...",
      unsupportedFile: "対応していないファイル形式です。",
      selectRange: "ドラッグして範囲を指定してください。",
      fileLoadFailed: "ファイルを読み込めませんでした。",
      mosaicApplied: "選択範囲にモザイクを適用しました。",
      cropCurrentApplied: "現在ページをトリミングしました。",
      cropAllApplied: "全ページを同じ範囲でトリミングしました。",
      cropCanceled: "トリミングをキャンセルしました。",
      selectionCleared: "選択を解除しました。",
      pageMoved: "ページを移動しました。",
      exporting: "書き出し中です...",
      downloadStarted: "ダウンロードを開始しました。",
      exportFailed: "書き出しに失敗しました。",
      cropAdjust: "黒いハンドルをドラッグして範囲を調整してください。外側へ広げると切り取った部分を戻せます。",
      imageExportFailed: "画像を書き出せませんでした。",
      pdfLibFailed: "PDF書き出しライブラリを読み込めませんでした。",
      pageImageExportFailed: "ページ画像を書き出せませんでした。"
    },
    en: {
      appTitle: "PixelGuard",
      sidebarLabel: "Controls",
      appSubtitle: "Image/PDF mosaic editor",
      uploadTitle: "Choose a file",
      uploadHint: "Drop PNG, JPEG, WebP, or PDF / paste with Ctrl+V",
      pasteFromClipboard: "Paste from clipboard",
      copyToClipboard: "Copy to clipboard",
      clipboardNoFile: "The clipboard does not contain an image or PDF.",
      clipboardReadUnsupported: "This browser does not support pasting from the button. Press Ctrl+V to paste.",
      clipboardReadDenied: "Clipboard access was not allowed. Press Ctrl+V to paste.",
      clipboardWriteUnsupported: "This browser does not support copying images to the clipboard.",
      clipboardWriteFailed: "Could not copy to the clipboard.",
      copied: "Copied the current page image to the clipboard.",
      output: "Output",
      outputType: "Output format",
      image: "Image",
      download: "Download",
      mosaic: "Mosaic",
      view: "View",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      zoomFit: "Fit",
      magnifier: "Magnifier",
      magnifierOn: "Magnifier: On",
      magnifierOff: "Magnifier: Off",
      magnification: "Zoom",
      coarseness: "Block size",
      selectionMode: "Selection method",
      selectArea: "Area",
      selectText: "Text",
      selectTextHint: "Drag across PDF text to select it. Double-click selects a whole text run.",
      applyMosaic: "Apply to selection",
      clearSelection: "Clear selection",
      crop: "Crop",
      applyCurrentPage: "Apply to current page",
      applyAllPages: "Apply to all pages",
      cancel: "Cancel",
      page: "Page",
      previousPage: "Previous page",
      nextPage: "Next page",
      status: "Status",
      chooseFile: "Choose a file to begin.",
      canvasPreview: "Edit preview",
      errorPrefix: "Error: {message}",
      dropOneFile: "Drop one image or PDF file.",
      loading: "Loading...",
      unsupportedFile: "This file type is not supported.",
      selectRange: "Drag on the preview to select an area.",
      fileLoadFailed: "Could not load the file.",
      mosaicApplied: "Applied mosaic to the selected area.",
      cropCurrentApplied: "Cropped the current page.",
      cropAllApplied: "Cropped all pages to the same area.",
      cropCanceled: "Canceled cropping.",
      selectionCleared: "Selection cleared.",
      pageMoved: "Moved to another page.",
      exporting: "Exporting...",
      downloadStarted: "Download started.",
      exportFailed: "Export failed.",
      cropAdjust: "Drag the black handles to adjust the crop area. Expand outward to restore cropped-out areas.",
      imageExportFailed: "Could not export the image.",
      pdfLibFailed: "Could not load the PDF export library.",
      pageImageExportFailed: "Could not export the page image."
    }
  };

  const ctx = els.canvas.getContext("2d", { willReadFrequently: true });
  const state = {
    fileName: "pixelguard",
    fileType: null,
    pages: [],
    currentPage: 0,
    selection: null,
    dragStart: null,
    activePointerId: null,
    cropMode: false,
    cropRect: null,
    cropDrag: null,
    magnifier: false,
    selectionMode: "area",
    // { anchor, focus } character indexes into the current page's textChars.
    textSelection: null,
    // null = fit to the workspace; otherwise CSS pixels per canvas pixel.
    viewZoom: null,
    lastPointer: null
  };

  function getLocale() {
    const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    return languages.some((language) => language.toLowerCase().startsWith("ja")) ? "ja" : "en";
  }

  function t(key, values = {}) {
    const template = (messages[locale] && messages[locale][key]) || messages.en[key] || key;
    return Object.entries(values).reduce((text, [name, value]) => {
      return text.replaceAll(`{${name}}`, String(value));
    }, template);
  }

  function applyI18n() {
    document.documentElement.lang = locale;
    document.title = t("appTitle");
    // Keep the HTML fallback text when a key is missing instead of showing the raw key.
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      if (hasMessage(element.dataset.i18n)) {
        element.textContent = t(element.dataset.i18n);
      }
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      if (hasMessage(element.dataset.i18nAriaLabel)) {
        element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
      }
    });
  }

  function hasMessage(key) {
    return Boolean((messages[locale] && messages[locale][key]) || messages.en[key]);
  }

  window.addEventListener("error", (event) => {
    setStatus(t("errorPrefix", { message: event.message }));
  });

  applyI18n();
  initializeEmptyCanvas();

  els.fileInput.addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    await openFile(file);
    els.fileInput.value = "";
  });

  els.uploadBox.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    els.fileInput.click();
  });

  ["dragenter", "dragover"].forEach((type) => {
    els.uploadBox.addEventListener(type, (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "copy";
      }
      els.uploadBox.classList.add("is-dragover");
    });
  });

  ["dragleave", "drop"].forEach((type) => {
    els.uploadBox.addEventListener(type, (event) => {
      event.preventDefault();
      event.stopPropagation();
      els.uploadBox.classList.remove("is-dragover");
    });
  });

  els.uploadBox.addEventListener("drop", async (event) => {
    const file = getDroppedFile(event);
    if (!file) {
      setStatus(t("dropOneFile"));
      return;
    }
    await openFile(file);
  });

  els.blockSize.addEventListener("input", () => {
    els.blockSizeValue.value = els.blockSize.value;
  });

  const LENS_SIZE = 180;
  const lensCtx = els.magnifierLens.getContext("2d");

  els.magnifierBtn.addEventListener("click", () => {
    state.magnifier = !state.magnifier;
    if (!state.magnifier) hideMagnifier();
    updateControls();
  });

  els.magnifierZoom.addEventListener("input", () => {
    els.magnifierZoomValue.value = `${els.magnifierZoom.value}x`;
    updateMagnifier();
  });

  const canvasShell = els.canvas.parentElement;
  canvasShell.addEventListener("pointermove", (event) => {
    state.lastPointer = { clientX: event.clientX, clientY: event.clientY };
    updateMagnifier();
  });
  canvasShell.addEventListener("pointerleave", () => {
    state.lastPointer = null;
    hideMagnifier();
  });

  function hideMagnifier() {
    els.magnifierLens.hidden = true;
  }

  // Draws a circular lens centered on the pointer, magnifying the preview canvas.
  function updateMagnifier() {
    const pointer = state.lastPointer;
    if (!state.magnifier || !hasDocument() || !pointer) {
      hideMagnifier();
      return;
    }

    const canvasRect = els.canvas.getBoundingClientRect();
    if (
      !canvasRect.width ||
      pointer.clientX < canvasRect.left ||
      pointer.clientX > canvasRect.right ||
      pointer.clientY < canvasRect.top ||
      pointer.clientY > canvasRect.bottom
    ) {
      hideMagnifier();
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    const pixelSize = Math.round(LENS_SIZE * dpr);
    if (els.magnifierLens.width !== pixelSize) {
      els.magnifierLens.width = pixelSize;
      els.magnifierLens.height = pixelSize;
    }

    // Canvas pixels per CSS pixel of the displayed preview.
    const scale = els.canvas.width / canvasRect.width;
    const zoom = Number(els.magnifierZoom.value);
    const sourceSize = (LENS_SIZE / zoom) * scale;
    const centerX = (pointer.clientX - canvasRect.left) * scale;
    const centerY = (pointer.clientY - canvasRect.top) * scale;
    const sourceX = centerX - sourceSize / 2;
    const sourceY = centerY - sourceSize / 2;
    const ratio = pixelSize / sourceSize;

    lensCtx.save();
    lensCtx.setTransform(1, 0, 0, 1, 0, 0);
    lensCtx.fillStyle = "#cbd4dd";
    lensCtx.fillRect(0, 0, pixelSize, pixelSize);
    lensCtx.imageSmoothingEnabled = false;
    lensCtx.setTransform(ratio, 0, 0, ratio, -sourceX * ratio, -sourceY * ratio);
    lensCtx.drawImage(els.canvas, 0, 0);

    const rect = state.cropMode ? state.cropRect : state.selection;
    if (rect && rect.width >= 2 && rect.height >= 2) {
      lensCtx.lineWidth = 2 / ratio;
      lensCtx.strokeStyle = state.cropMode ? "#111111" : "#22736b";
      lensCtx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }
    lensCtx.restore();

    // Crosshair marking the exact pointer position.
    const mid = pixelSize / 2;
    const arm = 8 * dpr;
    lensCtx.lineWidth = Math.max(1, dpr);
    lensCtx.strokeStyle = "rgba(255, 255, 255, 0.9)";
    lensCtx.beginPath();
    lensCtx.moveTo(mid - arm, mid);
    lensCtx.lineTo(mid + arm, mid);
    lensCtx.moveTo(mid, mid - arm);
    lensCtx.lineTo(mid, mid + arm);
    lensCtx.stroke();
    lensCtx.strokeStyle = "rgba(28, 37, 48, 0.85)";
    lensCtx.setLineDash([2 * dpr, 2 * dpr]);
    lensCtx.stroke();
    lensCtx.setLineDash([]);

    const shellRect = canvasShell.getBoundingClientRect();
    els.magnifierLens.style.left = `${pointer.clientX - shellRect.left - LENS_SIZE / 2}px`;
    els.magnifierLens.style.top = `${pointer.clientY - shellRect.top - LENS_SIZE / 2}px`;
    els.magnifierLens.hidden = false;
  }

  async function openFile(file) {
    try {
      resetDocument();
      state.fileName = stripExtension(file.name);
      setStatus(t("loading"));
      if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
        await loadPdf(file);
      } else if (file.type.startsWith("image/")) {
        await loadImage(file);
      } else {
        throw new Error(t("unsupportedFile"));
      }
      renderCurrentPage();
      setStatus(t("selectRange"));
    } catch (error) {
      console.error(error);
      resetDocument();
      initializeEmptyCanvas();
      setStatus(error.message || t("fileLoadFailed"));
    } finally {
      updateControls();
    }
  }

  function getDroppedFile(event) {
    const files = Array.from(event.dataTransfer && event.dataTransfer.files ? event.dataTransfer.files : []);
    return files.find(isSupportedFile) || null;
  }

  function isSupportedFile(file) {
    const name = (file.name || "").toLowerCase();
    return file.type.startsWith("image/") || file.type === "application/pdf" || name.endsWith(".pdf");
  }

  function getClipboardEventFile(clipboardData) {
    if (!clipboardData) return null;
    const files = Array.from(clipboardData.files || []);
    for (const item of Array.from(clipboardData.items || [])) {
      if (item.kind !== "file") continue;
      const file = item.getAsFile();
      if (file) files.push(file);
    }
    const file = files.find(isSupportedFile);
    return file ? nameClipboardFile(file, file.type) : null;
  }

  // Browsers name pasted bitmaps generically (e.g. "image.png"); keep real file names only.
  function nameClipboardFile(blob, type) {
    const name = blob.name || "";
    if (name && !/^image\.\w+$/i.test(name)) return blob;
    const extension = type === "application/pdf" ? "pdf" : (type.split("/")[1] || "png");
    return new File([blob], `clipboard.${extension}`, { type });
  }

  async function pasteFromClipboardApi() {
    if (!navigator.clipboard || !navigator.clipboard.read) {
      setStatus(t("clipboardReadUnsupported"));
      return;
    }

    let items;
    try {
      items = await navigator.clipboard.read();
    } catch (error) {
      console.error(error);
      setStatus(t(error && error.name === "NotAllowedError" ? "clipboardReadDenied" : "clipboardReadUnsupported"));
      return;
    }

    for (const item of items) {
      const type = item.types.find((itemType) => itemType.startsWith("image/") || itemType === "application/pdf");
      if (!type) continue;
      const blob = await item.getType(type);
      await openFile(nameClipboardFile(blob, type));
      return;
    }
    setStatus(t("clipboardNoFile"));
  }

  async function copyCurrentPageToClipboard() {
    if (!hasDocument() || state.cropMode) return;
    if (!navigator.clipboard || !navigator.clipboard.write || typeof ClipboardItem === "undefined") {
      setStatus(t("clipboardWriteUnsupported"));
      return;
    }

    try {
      const page = state.pages[state.currentPage];
      // Pass a Promise so Safari keeps the user activation while the PNG is encoded.
      const item = new ClipboardItem({ "image/png": canvasToBlob(page.canvas) });
      await navigator.clipboard.write([item]);
      setStatus(t("copied"));
    } catch (error) {
      console.error(error);
      setStatus(t("clipboardWriteFailed"));
    }
  }

  function isEditableTarget(target) {
    if (!target || !(target instanceof Element)) return false;
    if (target.isContentEditable) return true;
    if (target.tagName === "TEXTAREA") return true;
    if (target.tagName !== "INPUT") return false;
    return ["text", "search", "url", "email", "number", "password", "tel"].includes(target.type);
  }

  document.addEventListener("paste", async (event) => {
    if (isEditableTarget(event.target)) return;
    const file = getClipboardEventFile(event.clipboardData);
    if (!file) {
      setStatus(t("clipboardNoFile"));
      return;
    }
    event.preventDefault();
    await openFile(file);
  });

  document.addEventListener("keydown", (event) => {
    if (!(event.ctrlKey || event.metaKey) || event.altKey || event.shiftKey) return;
    if (event.key.toLowerCase() !== "c") return;
    if (isEditableTarget(event.target) || !hasDocument() || state.cropMode) return;
    const selection = window.getSelection();
    if (selection && selection.toString()) return;
    event.preventDefault();
    copyCurrentPageToClipboard();
  });

  document.querySelectorAll("input[name='select-mode']").forEach((input) => {
    input.addEventListener("change", () => {
      if (!input.checked) return;
      state.selectionMode = input.value;
      state.selection = null;
      state.textSelection = null;
      renderCurrentPage();
      setStatus(t(input.value === "text" ? "selectTextHint" : "selectRange"));
      updateControls();
    });
  });

  els.pasteBtn.addEventListener("click", pasteFromClipboardApi);
  els.copyBtn.addEventListener("click", copyCurrentPageToClipboard);

  els.applyBtn.addEventListener("click", () => {
    if (!hasDocument() || (!state.selection && !state.textSelection)) return;
    const page = state.pages[state.currentPage];
    const blockSize = Number(els.blockSize.value);
    if (state.textSelection) {
      for (const rect of getTextSelectionRects(page)) {
        mosaicRect(page.sourceCanvas, padRect(rect, 2), blockSize);
      }
    } else {
      mosaicRect(page.sourceCanvas, toSourceRect(page, state.selection), blockSize);
    }
    updatePageView(page);
    state.selection = null;
    state.textSelection = null;
    renderCurrentPage();
    setStatus(t("mosaicApplied"));
    updateControls();
  });

  els.cropStartBtn.addEventListener("click", () => {
    if (!hasDocument()) return;
    enterCropMode();
  });

  els.cropCurrentBtn.addEventListener("click", () => {
    if (!hasDocument() || !state.cropRect) return;
    cropPage(state.pages[state.currentPage], state.cropRect);
    exitCropMode();
    renderCurrentPage();
    setStatus(t("cropCurrentApplied"));
    updateControls();
  });

  els.cropAllBtn.addEventListener("click", () => {
    if (!hasDocument() || !state.cropRect) return;
    const cropRect = state.cropRect;
    for (const page of state.pages) {
      cropPage(page, cropRect);
    }
    exitCropMode();
    renderCurrentPage();
    setStatus(t("cropAllApplied"));
    updateControls();
  });

  els.cropCancelBtn.addEventListener("click", () => {
    if (!state.cropMode) return;
    exitCropMode();
    renderCurrentPage();
    setStatus(t("cropCanceled"));
    updateControls();
  });

  els.clearSelectionBtn.addEventListener("click", () => {
    state.selection = null;
    state.textSelection = null;
    renderCurrentPage();
    setStatus(t("selectionCleared"));
    updateControls();
  });

  els.prevPageBtn.addEventListener("click", () => {
    if (state.currentPage <= 0) return;
    exitCropMode();
    state.currentPage -= 1;
    state.selection = null;
    state.textSelection = null;
    renderCurrentPage();
    setStatus(t("pageMoved"));
    updateControls();
  });

  els.nextPageBtn.addEventListener("click", () => {
    if (state.currentPage >= state.pages.length - 1) return;
    exitCropMode();
    state.currentPage += 1;
    state.selection = null;
    state.textSelection = null;
    renderCurrentPage();
    setStatus(t("pageMoved"));
    updateControls();
  });

  els.downloadBtn.addEventListener("click", async () => {
    if (!hasDocument()) return;

    try {
      setStatus(t("exporting"));
      const exportType = document.querySelector("input[name='export-type']:checked").value;
      if (exportType === "pdf") {
        await downloadPdf();
      } else {
        downloadCurrentPageImage();
      }
      setStatus(t("downloadStarted"));
    } catch (error) {
      console.error(error);
      setStatus(error.message || t("exportFailed"));
    }
  });

  els.canvas.addEventListener("pointerdown", (event) => {
    if (!hasDocument() || state.cropMode) return;
    const point = getCanvasPoint(event);
    if (!point) return;

    if (isTextMode()) {
      const index = charIndexAtView(point);
      if (index < 0) return;
      event.preventDefault();
      state.textSelection = { anchor: index, focus: index };
      state.activePointerId = event.pointerId;
      els.canvas.setPointerCapture(event.pointerId);
      renderCurrentPage();
      updateControls();
      return;
    }

    state.dragStart = point;
    state.selection = { x: point.x, y: point.y, width: 0, height: 0 };
    state.activePointerId = event.pointerId;
    els.canvas.setPointerCapture(event.pointerId);
    renderCurrentPage();
    updateControls();
  });

  els.canvas.addEventListener("pointermove", (event) => {
    if (state.activePointerId !== event.pointerId) return;
    const point = getCanvasPoint(event);
    if (!point) return;

    if (isTextMode() && state.textSelection) {
      const index = charIndexAtView(point);
      if (index >= 0 && index !== state.textSelection.focus) {
        state.textSelection = { anchor: state.textSelection.anchor, focus: index };
        renderCurrentPage();
        updateControls();
      }
      return;
    }

    if (!state.dragStart) return;
    state.selection = normalizeRect(state.dragStart.x, state.dragStart.y, point.x, point.y);
    renderCurrentPage();
    updateControls();
  });

  els.canvas.addEventListener("pointerup", finishDrag);

  // Double-click selects the whole text run (pdf.js text item) under the pointer.
  els.canvas.addEventListener("dblclick", (event) => {
    if (!hasDocument() || state.cropMode || !isTextMode()) return;
    const point = getCanvasPoint(event);
    const page = state.pages[state.currentPage];
    const index = point ? charIndexAtView(point) : -1;
    if (index < 0) return;
    const item = page.textChars[index].item;
    let start = index;
    let end = index;
    while (start > 0 && page.textChars[start - 1].item === item) start -= 1;
    while (end < page.textChars.length - 1 && page.textChars[end + 1].item === item) end += 1;
    state.textSelection = { anchor: start, focus: end };
    renderCurrentPage();
    updateControls();
  });
  els.canvas.addEventListener("pointercancel", finishDrag);

  els.cropFrame.addEventListener("pointerdown", (event) => {
    if (!state.cropMode || !state.cropRect) return;
    const point = getCanvasPoint(event);
    if (!point) return;

    event.preventDefault();
    const handle = event.target.dataset.handle || "move";
    state.cropDrag = {
      handle,
      startPoint: point,
      startRect: { ...state.cropRect },
      pointerId: event.pointerId
    };
    els.cropFrame.setPointerCapture(event.pointerId);
  });

  els.cropFrame.addEventListener("pointermove", (event) => {
    if (!state.cropDrag || state.cropDrag.pointerId !== event.pointerId) return;
    const point = getCanvasPoint(event);
    if (!point) return;

    const dx = point.x - state.cropDrag.startPoint.x;
    const dy = point.y - state.cropDrag.startPoint.y;
    state.cropRect = updateCropRect(state.cropDrag.startRect, state.cropDrag.handle, dx, dy);
    positionCropOverlay();
    updateMagnifier();
  });

  els.cropFrame.addEventListener("pointerup", finishCropDrag);
  els.cropFrame.addEventListener("pointercancel", finishCropDrag);
  window.addEventListener("resize", () => {
    positionSelectionBox();
    positionCropOverlay();
    updateControls();
  });

  const ZOOM_STEPS = [0.1, 0.25, 0.33, 0.5, 0.67, 0.75, 1, 1.25, 1.5, 2, 3, 4, 6, 8, 12, 16];
  const MIN_ZOOM = ZOOM_STEPS[0];
  const MAX_ZOOM = ZOOM_STEPS[ZOOM_STEPS.length - 1];

  els.zoomInBtn.addEventListener("click", () => stepZoom(1));
  els.zoomOutBtn.addEventListener("click", () => stepZoom(-1));
  els.zoomFitBtn.addEventListener("click", () => setViewZoom(null));
  els.zoomActualBtn.addEventListener("click", () => setViewZoom(1));

  // Ctrl+wheel (and trackpad pinch, which browsers report as Ctrl+wheel) zooms around the cursor.
  els.workspace.addEventListener("wheel", (event) => {
    if (!event.ctrlKey && !event.metaKey) return;
    if (!hasDocument()) return;
    event.preventDefault();
    const factor = Math.exp(-event.deltaY * 0.002);
    setViewZoom(getDisplayScale() * factor, { clientX: event.clientX, clientY: event.clientY });
  }, { passive: false });

  els.workspace.addEventListener("scroll", () => updateMagnifier());

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (isEditableTarget(event.target) || !hasDocument()) return;
    if (event.key === "+" || event.key === "=" || event.key === ";") {
      stepZoom(1);
    } else if (event.key === "-") {
      stepZoom(-1);
    } else if (event.key === "0") {
      setViewZoom(null);
    } else if (event.key === "1") {
      setViewZoom(1);
    } else {
      return;
    }
    event.preventDefault();
  });

  function getDisplayScale() {
    const rect = els.canvas.getBoundingClientRect();
    return rect.width && els.canvas.width ? rect.width / els.canvas.width : 1;
  }

  function stepZoom(direction) {
    if (!hasDocument()) return;
    const current = getDisplayScale();
    const next = direction > 0
      ? ZOOM_STEPS.find((step) => step > current * 1.001)
      : [...ZOOM_STEPS].reverse().find((step) => step < current * 0.999);
    setViewZoom(next === undefined ? (direction > 0 ? MAX_ZOOM : MIN_ZOOM) : next);
  }

  // Changes the zoom while keeping the anchor point (default: workspace center) fixed on screen.
  function setViewZoom(zoom, anchor) {
    if (!hasDocument()) return;
    const workspaceRect = els.workspace.getBoundingClientRect();
    const point = anchor || {
      clientX: workspaceRect.left + workspaceRect.width / 2,
      clientY: workspaceRect.top + workspaceRect.height / 2
    };
    const before = els.canvas.getBoundingClientRect();
    const relX = before.width ? (point.clientX - before.left) / before.width : 0.5;
    const relY = before.height ? (point.clientY - before.top) / before.height : 0.5;

    state.viewZoom = zoom === null ? null : clamp(zoom, MIN_ZOOM, MAX_ZOOM);
    applyCanvasZoom();

    if (state.viewZoom === null) {
      els.workspace.scrollTo(0, 0);
    } else {
      const after = els.canvas.getBoundingClientRect();
      els.workspace.scrollLeft += after.left + relX * after.width - point.clientX;
      els.workspace.scrollTop += after.top + relY * after.height - point.clientY;
    }
    positionSelectionBox();
    positionCropOverlay();
    updateMagnifier();
    updateControls();
  }

  function applyCanvasZoom() {
    const zoom = hasDocument() ? state.viewZoom : null;
    if (zoom === null) {
      els.canvas.style.width = "";
      els.canvas.style.height = "";
    } else {
      els.canvas.style.width = `${els.canvas.width * zoom}px`;
      els.canvas.style.height = `${els.canvas.height * zoom}px`;
    }
    els.canvas.classList.toggle("is-zoomed", zoom !== null);
    els.canvas.classList.toggle("is-pixelated", zoom !== null && zoom >= 2);
  }

  function finishDrag(event) {
    if (state.activePointerId !== event.pointerId) return;
    try {
      els.canvas.releasePointerCapture(event.pointerId);
    } catch (_) {
      // Pointer capture may already be released by the browser.
    }
    state.activePointerId = null;
    state.dragStart = null;

    if (state.selection && (state.selection.width < 2 || state.selection.height < 2)) {
      state.selection = null;
      renderCurrentPage();
    }
    updateControls();
  }

  function finishCropDrag(event) {
    if (!state.cropDrag || state.cropDrag.pointerId !== event.pointerId) return;
    try {
      els.cropFrame.releasePointerCapture(event.pointerId);
    } catch (_) {
      // Pointer capture may already be released by the browser.
    }
    state.cropDrag = null;
    updateControls();
  }

  async function loadImage(file) {
    const bitmap = await createImageBitmap(file);
    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = bitmap.width;
    pageCanvas.height = bitmap.height;
    pageCanvas.getContext("2d").drawImage(bitmap, 0, 0);
    bitmap.close();
    state.fileType = "image";
    state.pages = [createPage(pageCanvas)];
  }

  async function loadPdf(file) {
    const pdfjs = await getPdfJs();
    pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

    const data = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data }).promise;
    const pages = [];
    const maxRenderWidth = 1800;

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const baseViewport = page.getViewport({ scale: 1 });
      const scale = Math.min(2, Math.max(1, maxRenderWidth / baseViewport.width));
      const viewport = page.getViewport({ scale });
      const pageCanvas = document.createElement("canvas");
      const pageCtx = pageCanvas.getContext("2d", { willReadFrequently: true });
      pageCanvas.width = Math.round(viewport.width);
      pageCanvas.height = Math.round(viewport.height);
      await page.render({ canvasContext: pageCtx, viewport }).promise;
      const pageData = createPage(pageCanvas);
      pageData.textChars = await extractTextChars(page, viewport);
      pages.push(pageData);
    }

    state.fileType = "pdf";
    state.pages = pages;
  }

  // Returns per-character boxes (source canvas pixels) in pdf.js reading order.
  // pdf.js only gives a width per text run, so glyph widths inside a run are
  // estimated proportionally from a generic font's metrics.
  async function extractTextChars(pdfPage, viewport) {
    let content;
    try {
      content = await pdfPage.getTextContent();
    } catch (error) {
      console.error(error);
      return [];
    }

    const measureCtx = document.createElement("canvas").getContext("2d");
    measureCtx.font = "100px sans-serif";
    const chars = [];

    content.items.forEach((item, itemIndex) => {
      if (!item.str || !item.str.trim() || !item.width) return;
      const [a, b, c, d, e, f] = item.transform;
      const dirLength = Math.hypot(a, b) || 1;
      const fontSize = Math.hypot(c, d) || dirLength;
      const ux = a / dirLength;
      const uy = b / dirLength;
      const vx = c / fontSize;
      const vy = d / fontSize;
      const glyphs = Array.from(item.str);
      const weights = glyphs.map((glyph) => measureCtx.measureText(glyph).width || 50);
      const total = weights.reduce((sum, weight) => sum + weight, 0);
      let offset = 0;

      glyphs.forEach((glyph, glyphIndex) => {
        const start = (offset / total) * item.width;
        offset += weights[glyphIndex];
        const end = (offset / total) * item.width;
        // Cover from slightly below the baseline (descenders) to the top of the em box.
        const corners = [[start, -0.22], [end, -0.22], [start, 1], [end, 1]].map(([along, up]) => {
          const x = e + ux * along + vx * up * fontSize;
          const y = f + uy * along + vy * up * fontSize;
          return applyMatrix(viewport.transform, x, y);
        });
        const xs = corners.map((point) => point[0]);
        const ys = corners.map((point) => point[1]);
        const left = Math.min(...xs);
        const top = Math.min(...ys);
        chars.push({
          x: left,
          y: top,
          width: Math.max(...xs) - left,
          height: Math.max(...ys) - top,
          item: itemIndex
        });
      });
    });

    return chars;
  }

  function applyMatrix(m, x, y) {
    return [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
  }

  function isTextMode() {
    return state.selectionMode === "text" && !state.cropMode;
  }

  // Finds the character under (or nearest to) a point given in view coordinates.
  function charIndexAtView(point) {
    const page = state.pages[state.currentPage];
    const chars = (page && page.textChars) || [];
    if (!chars.length) return -1;
    const x = point.x + page.crop.x;
    const y = point.y + page.crop.y;
    let best = -1;
    let bestScore = Infinity;
    for (let i = 0; i < chars.length; i += 1) {
      const box = chars[i];
      const dx = Math.max(box.x - x, 0, x - (box.x + box.width));
      const dy = Math.max(box.y - y, 0, y - (box.y + box.height));
      if (dx === 0 && dy === 0) return i;
      // Prefer characters on the same line over vertically closer ones.
      const score = dy * 4 + dx;
      if (score < bestScore) {
        bestScore = score;
        best = i;
      }
    }
    return best;
  }

  // Merges the selected characters into one box per text run (source canvas pixels).
  function getTextSelectionRects(page) {
    const selection = state.textSelection;
    const chars = page.textChars || [];
    if (!selection || !chars.length) return [];
    const from = Math.min(selection.anchor, selection.focus);
    const to = Math.max(selection.anchor, selection.focus);
    const rects = [];
    let current = null;
    for (let i = from; i <= to; i += 1) {
      const box = chars[i];
      if (current && current.item === box.item) {
        const right = Math.max(current.x + current.width, box.x + box.width);
        const bottom = Math.max(current.y + current.height, box.y + box.height);
        current.x = Math.min(current.x, box.x);
        current.y = Math.min(current.y, box.y);
        current.width = right - current.x;
        current.height = bottom - current.y;
      } else {
        current = { ...box };
        rects.push(current);
      }
    }
    return rects;
  }

  function padRect(rect, padding) {
    return {
      x: rect.x - padding,
      y: rect.y - padding,
      width: rect.width + padding * 2,
      height: rect.height + padding * 2
    };
  }

  function hasSelectableText() {
    return state.pages.some((page) => page.textChars && page.textChars.length > 0);
  }

  async function getPdfJs() {
    if (window.pdfjsLib) return window.pdfjsLib;

    const moduleUrl = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs";
    const module = await import(moduleUrl);
    window.pdfjsLib = module;
    return module;
  }

  function createPage(sourceCanvas) {
    const page = {
      sourceCanvas,
      canvas: document.createElement("canvas"),
      crop: {
        x: 0,
        y: 0,
        width: sourceCanvas.width,
        height: sourceCanvas.height
      },
      width: sourceCanvas.width,
      height: sourceCanvas.height
    };
    updatePageView(page);
    return page;
  }

  function updatePageView(page) {
    const crop = clampRectToCanvas(page.sourceCanvas, page.crop);
    const viewCanvas = document.createElement("canvas");
    viewCanvas.width = crop.width;
    viewCanvas.height = crop.height;
    viewCanvas.getContext("2d").drawImage(
      page.sourceCanvas,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    page.crop = crop;
    page.canvas = viewCanvas;
    page.width = viewCanvas.width;
    page.height = viewCanvas.height;
  }

  function renderCurrentPage() {
    if (!hasDocument()) {
      initializeEmptyCanvas();
      return;
    }

    const page = state.pages[state.currentPage];
    const renderCanvas = state.cropMode ? page.sourceCanvas : page.canvas;
    els.canvas.classList.remove("is-empty");
    els.canvas.width = renderCanvas.width;
    els.canvas.height = renderCanvas.height;
    ctx.clearRect(0, 0, els.canvas.width, els.canvas.height);
    ctx.drawImage(renderCanvas, 0, 0);
    if (!state.cropMode && state.textSelection) {
      ctx.fillStyle = "rgba(34, 115, 107, 0.35)";
      for (const rect of getTextSelectionRects(page)) {
        ctx.fillRect(rect.x - page.crop.x, rect.y - page.crop.y, rect.width, rect.height);
      }
    }
    applyCanvasZoom();
    positionSelectionBox();
    positionCropOverlay();
    updateMagnifier();
  }

  function enterCropMode() {
    const page = state.pages[state.currentPage];
    state.selection = null;
    state.textSelection = null;
    state.cropMode = true;
    state.cropRect = { ...page.crop };
    els.canvas.classList.add("is-cropping");
    renderCurrentPage();
    setStatus(t("cropAdjust"));
    updateControls();
  }

  function exitCropMode() {
    state.cropMode = false;
    state.cropRect = null;
    state.cropDrag = null;
    els.cropOverlay.hidden = true;
    els.canvas.classList.remove("is-cropping");
  }

  function positionSelectionBox() {
    const rect = state.selection;
    if (state.cropMode || !rect || rect.width < 2 || rect.height < 2) {
      els.selectionBox.hidden = true;
      return;
    }

    const canvasRect = els.canvas.getBoundingClientRect();
    const shellRect = els.canvas.parentElement.getBoundingClientRect();
    const scaleX = canvasRect.width / els.canvas.width;
    const scaleY = canvasRect.height / els.canvas.height;

    els.selectionBox.hidden = false;
    els.selectionBox.style.left = `${canvasRect.left - shellRect.left + rect.x * scaleX}px`;
    els.selectionBox.style.top = `${canvasRect.top - shellRect.top + rect.y * scaleY}px`;
    els.selectionBox.style.width = `${rect.width * scaleX}px`;
    els.selectionBox.style.height = `${rect.height * scaleY}px`;
  }

  function positionCropOverlay() {
    if (!state.cropMode || !state.cropRect || !hasDocument()) {
      els.cropOverlay.hidden = true;
      return;
    }

    const canvasRect = els.canvas.getBoundingClientRect();
    const shellRect = els.canvas.parentElement.getBoundingClientRect();
    const scaleX = canvasRect.width / els.canvas.width;
    const scaleY = canvasRect.height / els.canvas.height;
    const frame = {
      left: state.cropRect.x * scaleX,
      top: state.cropRect.y * scaleY,
      width: state.cropRect.width * scaleX,
      height: state.cropRect.height * scaleY
    };

    els.cropOverlay.hidden = false;
    els.cropOverlay.style.left = `${canvasRect.left - shellRect.left}px`;
    els.cropOverlay.style.top = `${canvasRect.top - shellRect.top}px`;
    els.cropOverlay.style.width = `${canvasRect.width}px`;
    els.cropOverlay.style.height = `${canvasRect.height}px`;

    els.cropFrame.style.left = `${frame.left}px`;
    els.cropFrame.style.top = `${frame.top}px`;
    els.cropFrame.style.width = `${frame.width}px`;
    els.cropFrame.style.height = `${frame.height}px`;

    setCropShade("top", 0, 0, canvasRect.width, frame.top);
    setCropShade("right", frame.left + frame.width, frame.top, canvasRect.width - frame.left - frame.width, frame.height);
    setCropShade("bottom", 0, frame.top + frame.height, canvasRect.width, canvasRect.height - frame.top - frame.height);
    setCropShade("left", 0, frame.top, frame.left, frame.height);
  }

  function setCropShade(name, left, top, width, height) {
    const shade = els.cropOverlay.querySelector(`.crop-shade-${name}`);
    shade.style.left = `${left}px`;
    shade.style.top = `${top}px`;
    shade.style.width = `${Math.max(0, width)}px`;
    shade.style.height = `${Math.max(0, height)}px`;
  }

  function getCanvasPoint(event) {
    const rect = els.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    const x = clamp((event.clientX - rect.left) * (els.canvas.width / rect.width), 0, els.canvas.width);
    const y = clamp((event.clientY - rect.top) * (els.canvas.height / rect.height), 0, els.canvas.height);
    return { x, y };
  }

  function normalizeRect(x1, y1, x2, y2) {
    const x = clamp(Math.min(x1, x2), 0, els.canvas.width);
    const y = clamp(Math.min(y1, y2), 0, els.canvas.height);
    const right = clamp(Math.max(x1, x2), 0, els.canvas.width);
    const bottom = clamp(Math.max(y1, y2), 0, els.canvas.height);
    return {
      x: Math.round(x),
      y: Math.round(y),
      width: Math.round(right - x),
      height: Math.round(bottom - y)
    };
  }

  function toSourceRect(page, rect) {
    return {
      x: rect.x + page.crop.x,
      y: rect.y + page.crop.y,
      width: rect.width,
      height: rect.height
    };
  }

  function updateCropRect(startRect, handle, dx, dy) {
    const minSize = Math.min(24, Math.max(8, Math.floor(Math.min(els.canvas.width, els.canvas.height) / 12)));
    let left = startRect.x;
    let top = startRect.y;
    let right = startRect.x + startRect.width;
    let bottom = startRect.y + startRect.height;

    if (handle === "move") {
      const x = clamp(startRect.x + dx, 0, els.canvas.width - startRect.width);
      const y = clamp(startRect.y + dy, 0, els.canvas.height - startRect.height);
      return {
        x: Math.round(x),
        y: Math.round(y),
        width: Math.round(startRect.width),
        height: Math.round(startRect.height)
      };
    }

    if (handle.includes("w")) {
      left = clamp(left + dx, 0, right - minSize);
    }
    if (handle.includes("e")) {
      right = clamp(right + dx, left + minSize, els.canvas.width);
    }
    if (handle.includes("n")) {
      top = clamp(top + dy, 0, bottom - minSize);
    }
    if (handle.includes("s")) {
      bottom = clamp(bottom + dy, top + minSize, els.canvas.height);
    }

    return {
      x: Math.round(left),
      y: Math.round(top),
      width: Math.round(right - left),
      height: Math.round(bottom - top)
    };
  }

  function mosaicRect(canvas, rect, blockSize) {
    const drawCtx = canvas.getContext("2d", { willReadFrequently: true });
    const x = Math.max(0, Math.floor(rect.x));
    const y = Math.max(0, Math.floor(rect.y));
    const width = Math.min(canvas.width, Math.ceil(rect.x + rect.width)) - x;
    const height = Math.min(canvas.height, Math.ceil(rect.y + rect.height)) - y;
    if (width <= 0 || height <= 0) return;

    for (let by = y; by < y + height; by += blockSize) {
      for (let bx = x; bx < x + width; bx += blockSize) {
        const bw = Math.min(blockSize, x + width - bx);
        const bh = Math.min(blockSize, y + height - by);
        const average = averageColor(drawCtx, bx, by, bw, bh);
        drawCtx.fillStyle = `rgb(${average.r}, ${average.g}, ${average.b})`;
        drawCtx.fillRect(bx, by, bw, bh);
      }
    }
  }

  function cropPage(page, rect) {
    page.crop = clampRectToCanvas(page.sourceCanvas, rect);
    updatePageView(page);
  }

  function clampRectToCanvas(canvas, rect) {
    const x = clamp(Math.floor(rect.x), 0, canvas.width - 1);
    const y = clamp(Math.floor(rect.y), 0, canvas.height - 1);
    const right = clamp(Math.ceil(rect.x + rect.width), x + 1, canvas.width);
    const bottom = clamp(Math.ceil(rect.y + rect.height), y + 1, canvas.height);
    return {
      x,
      y,
      width: right - x,
      height: bottom - y
    };
  }

  function averageColor(drawCtx, x, y, width, height) {
    const data = drawCtx.getImageData(x, y, width, height).data;
    let r = 0;
    let g = 0;
    let b = 0;
    let count = 0;

    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3] / 255;
      r += data[i] * alpha;
      g += data[i + 1] * alpha;
      b += data[i + 2] * alpha;
      count += alpha;
    }

    if (!count) return { r: 255, g: 255, b: 255 };
    return {
      r: Math.round(r / count),
      g: Math.round(g / count),
      b: Math.round(b / count)
    };
  }

  function downloadCurrentPageImage() {
    const page = state.pages[state.currentPage];
    page.canvas.toBlob((blob) => {
      if (!blob) {
        setStatus(t("imageExportFailed"));
        return;
      }
      const suffix = state.pages.length > 1 ? `_page-${state.currentPage + 1}` : "";
      downloadBlob(blob, `${state.fileName}${suffix}_edited.png`);
    }, "image/png");
  }

  async function downloadPdf() {
    await loadPdfLib();
    if (!window.PDFLib || !window.PDFLib.PDFDocument) {
      throw new Error(t("pdfLibFailed"));
    }

    const pdfDoc = await window.PDFLib.PDFDocument.create();
    for (const page of state.pages) {
      const pngBytes = await canvasToPngBytes(page.canvas);
      const image = await pdfDoc.embedPng(pngBytes);
      const pdfPage = pdfDoc.addPage([page.width, page.height]);
      pdfPage.drawImage(image, {
        x: 0,
        y: 0,
        width: page.width,
        height: page.height
      });
    }

    const bytes = await pdfDoc.save();
    downloadBlob(new Blob([bytes], { type: "application/pdf" }), `${state.fileName}_edited.pdf`);
  }

  function loadPdfLib() {
    if (window.PDFLib && window.PDFLib.PDFDocument) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const existing = document.querySelector("script[data-pdf-lib]");
      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error(t("pdfLibFailed"))), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js";
      script.async = true;
      script.dataset.pdfLib = "true";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(t("pdfLibFailed")));
      document.head.appendChild(script);
    });
  }

  async function canvasToPngBytes(canvas) {
    const blob = await canvasToBlob(canvas);
    return blob.arrayBuffer();
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error(t("pageImageExportFailed")));
          return;
        }
        resolve(blob);
      }, "image/png");
    });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function resetDocument() {
    state.fileType = null;
    state.pages = [];
    state.currentPage = 0;
    state.selection = null;
    state.textSelection = null;
    state.dragStart = null;
    state.activePointerId = null;
    state.cropMode = false;
    state.cropRect = null;
    state.cropDrag = null;
    state.viewZoom = null;
    els.cropOverlay.hidden = true;
    els.canvas.classList.remove("is-cropping");
    els.workspace.scrollTo(0, 0);
  }

  function initializeEmptyCanvas() {
    els.canvas.classList.add("is-empty");
    applyCanvasZoom();
    els.canvas.width = 720;
    els.canvas.height = 480;
    ctx.clearRect(0, 0, els.canvas.width, els.canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, els.canvas.width, els.canvas.height);
    els.selectionBox.hidden = true;
    els.cropOverlay.hidden = true;
    hideMagnifier();
    updateControls();
  }

  function updateControls() {
    const loaded = hasDocument();
    const hasSelection = Boolean(
      (state.selection && state.selection.width >= 2 && state.selection.height >= 2) || state.textSelection
    );
    const textAvailable = loaded && hasSelectableText();
    els.selectModeText.disabled = !textAvailable;
    if (!textAvailable && state.selectionMode === "text") {
      state.selectionMode = "area";
      state.textSelection = null;
      document.querySelector("input[name='select-mode'][value='area']").checked = true;
    }
    els.canvas.classList.toggle("is-text-mode", loaded && isTextMode());
    const cropping = Boolean(state.cropMode && state.cropRect);
    els.applyBtn.disabled = !loaded || !hasSelection || cropping;
    els.cropStartBtn.disabled = !loaded || cropping;
    els.cropCurrentBtn.disabled = !loaded || !cropping;
    els.cropAllBtn.disabled = !loaded || !cropping || state.pages.length < 2;
    els.cropCancelBtn.disabled = !cropping;
    els.clearSelectionBtn.disabled = !loaded || !hasSelection || cropping;
    els.downloadBtn.disabled = !loaded || cropping;
    els.copyBtn.disabled = !loaded || cropping;
    els.magnifierBtn.disabled = !loaded;
    els.magnifierBtn.textContent = t(state.magnifier ? "magnifierOn" : "magnifierOff");
    els.magnifierBtn.setAttribute("aria-pressed", String(state.magnifier));
    els.magnifierBtn.classList.toggle("is-active", state.magnifier);
    els.prevPageBtn.disabled = !loaded || cropping || state.currentPage <= 0;
    els.nextPageBtn.disabled = !loaded || cropping || state.currentPage >= state.pages.length - 1;
    els.pageStatus.textContent = loaded ? `${state.currentPage + 1} / ${state.pages.length}` : "- / -";
    els.zoomOutBtn.disabled = !loaded;
    els.zoomInBtn.disabled = !loaded;
    els.zoomFitBtn.disabled = !loaded;
    els.zoomActualBtn.disabled = !loaded;
    els.zoomFitBtn.classList.toggle("is-active", loaded && state.viewZoom === null);
    els.zoomValue.textContent = loaded ? `${Math.round(getDisplayScale() * 100)}%` : "-";
    positionSelectionBox();
    positionCropOverlay();
  }

  function hasDocument() {
    return state.pages.length > 0;
  }

  function setStatus(message) {
    els.statusText.textContent = message;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function stripExtension(filename) {
    return filename.replace(/\.[^.]+$/, "") || "pixelguard";
  }
})();
